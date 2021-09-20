<script>
    export let key
    export let description
    export let required
    export let descriptionKey = description ? `${key}-description` : undefined
  </script>
  
  <label for={key}>{key}{#if required}*{/if}</label>
  
  {#if description}
    <p id={descriptionKey}>{description}</p>
  {/if}
  
  <slot {descriptionKey}></slot>