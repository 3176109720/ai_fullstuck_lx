<template>
  <van-action-bar>
    <van-action-bar-icon icon="chat-o" text="客服" />
    <van-action-bar-icon icon="cart-o" text="购物车" :badge="badgeNum ? badgeNum : ''"/>
    <van-action-bar-button type="warning" text="加入购物车" />
    <van-action-bar-button type="danger" text="立即购买" />
  </van-action-bar>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue';

const store = useStore()

const badgeNum = computed(() => {
  return store.state.cartCount
})

onMounted(() => {
  store.dispatch('setCartCountAction')  // store 中 actions 里面的函数都要用dispatch触发
})


</script>

<style lang="less" scoped>

</style>
<style>
.van-button--warning{
  background: linear-gradient(to right, #6bd8d8, #1baeae);
}
.van-button--danger{
  background: linear-gradient(to right, #0dc3c3, #098888);
}
</style>