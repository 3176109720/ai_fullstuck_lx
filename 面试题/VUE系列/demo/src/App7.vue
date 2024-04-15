<template>
  <div class="parent">

    <Child7>
      <!-- <template v-slot="slotProps">
        <h2>hello world -- {{slotProps.count}}</h2>
      </template> -->
      

      <template #top="slotProps">
        <h3>你好 -- {{slotProps.count}} -- {{abc}}</h3>
      </template>

      <template #bottom="slotProps">
        <h4>hello -- {{slotProps.msg}}</h4>
      </template>

    </Child7>

  </div>
</template>

<script setup>
import Child7 from './components/Child_7.vue'
const abc = 100
</script>

<style lang="css" scoped>

</style>