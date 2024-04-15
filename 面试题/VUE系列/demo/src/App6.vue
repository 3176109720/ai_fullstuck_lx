<template>
  <div>
    <ChildA />
    <ChildB />
  </div>

  <hr/>

  <div>
    <input type="text">
    <button>增加</button>
  </div>
  <ChildC />

</template>

<script setup>
import ChildA from './components/child6/A.vue'
import ChildB from './components/child6/B.vue'
import ChildC from './components/child6/C.vue'
import { getCurrentInstance } from 'vue'

const app = getCurrentInstance()

// console.log(app.appContext.config.globalProperties.$emitter);

</script>

<style lang="css" scoped>

</style>