<script>
  import Field from '../Field.svelte'

  export let key
  export let description
  export let required = false
  export let minLength = undefined
  export let maxLength = undefined
</script>

<Field {key} {description} {required} let:descriptionKey={descriptionKey}>
  <input 
    type="text" 
    id={key} 
    name={key} 
    required={required} 
    minlength={minLength}
    maxlength={maxLength}
    aria-describedby={descriptionKey}
  >
</Field>

