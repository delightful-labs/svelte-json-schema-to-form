<script>
    import Field from '../Field.svelte'
  
    export let key
    export let description
    export let required = false
    export let minimum = undefined
    export let maximum = undefined
    export let multipleOf = undefined
  </script>
  
  <Field {key} {description} {required} let:descriptionKey={descriptionKey}>
    <input 
      type="number" 
      id={key} 
      name={key} 
      required={required} 
      min={minimum}
      max={maximum}
      aria-describedby={descriptionKey}
      step={multipleOf}
    >
  </Field>