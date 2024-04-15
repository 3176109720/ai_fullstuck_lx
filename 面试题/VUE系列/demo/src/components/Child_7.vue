<template>
  <div class="child bd">
    <!-- <slot :count="count"></slot> -->


    <slot name="top" :count="count"></slot>
    <hr/>
    <slot name="bottom" msg="过热器瓦房店市"></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(1)
</script>

<style lang="css" scoped>
.bd{
  width: 200px;
  height: 200px;
  border: 10px solid #a5d83e;
  border-image: url(https://q1.itc.cn/q_70/images03/20240320/fcf023d835c54f78bac6c7efc98fbb4c.jpeg) 30;
  
}
</style>