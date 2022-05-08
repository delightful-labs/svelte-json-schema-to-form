<script>
  import Form from '$lib/Form.svelte'
  import { writable } from 'svelte/store'

  const schema = {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: 'https://example.com/product.schema.json',
    title: 'Product',
    description: "A product from Acme's catalog",
    type: 'object',
    properties: {
      product: {
        description: 'Enter some text',
        type: 'string',
      },
      product2: {
        type: 'string',
        enum: ['', '_self', '_blank', '_parent', '_top'],
        component: 'select',
        description: 'Hi',
        //"minLength": 2,
        //"maxLength": 3
      },
      latitude: {
        type: 'number',
        minimum: -90,
        maximum: 90,
        multipleOf: 0.01,
      },
    },
    required: ['product'],
  }

  const data = writable({
    product: '',
    product2: '',
    latitude: 0,
  })

  const changeHandler = (e, path) => {
    $data = {
      ...$data,
      [path[0]]: e,
    }
  }

  $: console.log($data)
</script>

<div>
  {#if schema.title}
    <h1>{schema.title}</h1>
  {/if}
  <Form {schema} data={$data} {changeHandler} />
</div>
