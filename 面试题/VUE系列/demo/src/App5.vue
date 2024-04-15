<template>
  <div class="hd">
    <input type="text" name="" id="" v-model="msg">
    <button @click="add">添加</button>
  </div>

  <Child/>
</template>

<script setup>
import { ref, provide } from 'vue';
import Child from './components/Child_5.vue'

const msg = ref('')
const list = ref(['html', 'css'])

provide('list', list.value)

const add = () => {
  list.value.push(msg.value)
}
</script>

<style lang="css" scoped>
</style>