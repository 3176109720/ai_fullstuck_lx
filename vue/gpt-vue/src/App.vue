<script setup lang="ts">
</script>

<template>
  <!-- 
    当你加载一个异步组件 在没加载出来之前， 我们使用Suspense 做一个回调 显示占位符
    懒加载, 页面加载出来之前，显示点loading... 
  -->
  <Suspense>
    <router-view />
    <template #fallback>
      loading...
    </template>
  </Suspense>
</template>

<style scoped></style>
