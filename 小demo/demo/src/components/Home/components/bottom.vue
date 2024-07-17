<template>
    <div>
        <van-tabbar v-model="active">
        <van-tabbar-item to="home" icon="home-o">主页</van-tabbar-item>
        <van-tabbar-item to="shopcart" icon="cart-o" :badge="goodsNum">购物车</van-tabbar-item>
        <van-tabbar-item icon="friends-o" @click="loginOut">退出</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script lang="ts">
    import { computed } from 'vue';
    import { defineComponent, ref, getCurrentInstance } from 'vue';
    import { useStore } from 'vuex';

    export default defineComponent ({
        name: 'HomeBottom',
        setup(){
            const store = useStore()
            const active = ref(0)
            const { proxy }: any = getCurrentInstance()
            const goodsNum = computed(() => store.getters.getGoodsNum)

            function loginOut(){
                proxy.$router.push('/login')
                // 清除token
                window.sessionStorage.removeItem('token')
            }

            return {
                active,goodsNum,loginOut,
            }
        },
    })
</script>

<style scoped>

</style>