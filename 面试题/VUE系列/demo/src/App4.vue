<template>
  <Child ref="childRef"/>

  <div class="bd">
    <ul>
      <li v-for="item in childRef?.list">{{item}}</li>
    </ul>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import Child from './components/Child_4.vue'

const childRef = ref(null)

// onMounted(() => {
//   console.log('父组件挂载 后');
// })

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