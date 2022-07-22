<script>
  import resolvePath from '$lib/utils/resolvePath'

  let options
  export { options as enum }
  export let key
  export let changeHandler
  export let path
  export let required = false
  export let data
  export let description
  export let title
  let value = resolvePath(path, data)
</script>

<fieldset>
  <legend>{title ? title : key}</legend>

  {#each options as option}
    <input type="radio" id={option} name={key} checked={value === option ? true : undefined} on:input={(e) => changeHandler(option, path)} />
    <label for={option}>{option}</label><br />
  {/each}
</fieldset>
