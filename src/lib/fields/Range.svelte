<script>
  import Field from '$lib/Field.svelte'
  export let data
  export let key
  export let path
  export let required = false
  export let minimum = undefined
  export let maximum = undefined
  export let multipleOf = undefined
  export let changeHandler
  export let description

  const handleChange = (e, path) => {
    changeHandler(e.target.valueAsNumber, path)
  }
</script>

<Field {key} {description} {required} {data} {path} let:descriptionKey let:value>
  <input
    type="range"
    id={key}
    name={key}
    {required}
    min={minimum}
    max={maximum}
    aria-describedby={descriptionKey}
    step={multipleOf}
    value={value ? value : 0}
    on:input={(e) => handleChange(e, path)}
  />
</Field>
