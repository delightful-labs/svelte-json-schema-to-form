<script>
  import rPath from 'ramda/src/path'
  import Field from '$lib/Field.svelte'

  let options
  export { options as enum }
  export let key
  export let changeHandler
  export let path
  export let required = false
  export let data
  export let description
  export let title
  let value = rPath(path, data)
</script>

<Field {key} {description} {required} {data} {path} {title} let:descriptionKey let:value>
  <select id={key} name={key} on:change={(e) => changeHandler(e.target.value, path)} {required}>
    {#each options as option}
      <option selected={value === option ? true : undefined} value={option}>{option}</option>
    {/each}
  </select>
</Field>
