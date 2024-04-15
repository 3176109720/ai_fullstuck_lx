<template>
  <!-- parent -->
  <div class="hd">
    <input type="text" name="" id="" v-model="msg">
    <button @click="add">添加</button>
  </div>

  <!-- child -->
  <Child :message="message"/>
</template>

<script setup>
import { ref } from 'vue';
import Child from './components/Child_1.vue'

const msg = ref('')
const message = ref('')

const add = () => {
  message.value = msg.value
}
</script>

<style lang="css" scoped>
.hd input{
  width: 200px;
  padding: 10px 0;
  font-size: 20px;
}
.hd button{
  padding: 10px 20px;
  font-size: 20px;
}
</style>