<template>
  <div>
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import emitter from './emit.js'

const list = ref([])

emitter.on('list', (e) => {
  console.log(e);
  list.value = e
})
</script>

<style lang="css" scoped>

</style>