<script>
  import String from './fields/String.svelte'
  import Number from './fields/Number.svelte'
  import Fieldset from './fields/Fieldset.svelte'
  import Radio from './fields/Radio.svelte'
  import Select from './fields/Select.svelte'
  import Range from './fields/Range.svelte'
  export let customFields = {}
  export let schema
  //Create empty data structure if none provided?
  export let data
  export let changeHandler
  export let path

  //@TODO: Let user replace default fields
  const fields = {
    object: Fieldset,
    number: Number,
    radio: Radio,
    range: Range,
    select: Select,
    string: String,
    ...customFields,
  }
</script>

{#each Object.entries(schema.properties) as [key, field]}
  {#if field.display !== 'private'}
    {#if fields[field.component] || fields[field.type]}
      <svelte:component
        this={field.component ? fields[field.component] : fields[field.type]}
        {key}
        required={schema.required ? schema.required.includes(key) : false}
        {...field}
        {data}
        {changeHandler}
        path={path ? [...path, key] : [key]}
      />
    {/if}
  {/if}
{/each}
