<template>
  <div>
    <p ref="refP">消息：{{message}}</p>
    <button @click="updateMsg">更新消息</button>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, nextTick, onMounted } from 'vue';

const message = ref('初始消息')

const refP = ref(null)

// onBeforeMount(() => {
//   console.log(refP.value);
// })


// setTimeout(() => {
//   console.log(refP.value, 'setTimeout');
// }, 0)

const updateMsg = () => {
  message.value = '更新之后的消息'
}


nextTick(() => {
  console.log(refP.value, 'nextTick');
})
onMounted(() => {
  console.log(refP.value, 'onMounted');
})


// console.log(refP.value, '111');
</script>

<style lang="css" scoped>

</style>