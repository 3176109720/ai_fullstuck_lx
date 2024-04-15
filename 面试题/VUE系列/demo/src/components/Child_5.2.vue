<template>
  <div>
    <h2>hello {{list[0]}}</h2>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const list = inject('list');
</script>

<style lang="css" scoped>

</style>