<template>
  <div>
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const list = ref(['html'])

</script>

<style lang="css" scoped>

</style>