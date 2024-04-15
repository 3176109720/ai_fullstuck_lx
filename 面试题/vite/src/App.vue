<template>
  <div>
    {{count}}
    <button @click="() => count++">+1</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    return {count}
  }
}
</script>

<style lang="css" scoped>

</style>