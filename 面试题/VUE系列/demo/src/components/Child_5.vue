<template>
  <div class="bd">
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>

    <Child52 />
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import Child52 from './Child_5.2.vue'

const list = inject('list');
</script>

<style lang="css" scoped>

</style>