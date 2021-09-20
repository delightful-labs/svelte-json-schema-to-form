<script>
  import string from "./fields/string.svelte"
  import number from "./fields/number.svelte"
  export let customFields = []
  export let schema = {
		"$schema": "https://json-schema.org/draft/2020-12/schema",
		"$id": "https://example.com/product.schema.json",
		"title": "Product",
		"description": "A product from Acme's catalog",
		"type": "object",
		"properties": {
			"product": {
        "description": "Enter some text",
        "type": "string"
			},
      "product2": {
        "type": "string",
        "minLength": 2,
        "maxLength": 3
			},
      "latitude": {
        "type": "number",
        "minimum": -90,
        "maximum": 90,
        "multipleOf" : 0.01
      },
		},
		"required": [ "product" ]
	}

  const fields = {
    string: string,
    number: number,
    ...customFields
  }
</script>

<div>
  {#if schema.title}
    <h1>{schema.title}</h1>
  {/if}
	<form>
    {#each Object.entries(schema.properties) as [key, value] }
      <svelte:component
        this={fields[value.type]} 
        {key} 
        required={schema.required.includes(key)} 
        {...value}
      />
    {/each}

    <input type="submit" value="submit" />
  </form>
</div>