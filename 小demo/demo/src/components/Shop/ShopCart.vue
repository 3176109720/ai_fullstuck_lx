<template>
    <home-bottom></home-bottom>
<!-- 空状态下的组件 -->
    <div class="empty" v-if="goodsNum == 0">
        <van-empty image="search" description="当前购物车为空" />
    </div>

    <div v-else>

        <div class="goodstop">
            <h2>购物车</h2>
        </div>

<!-- 购物车商品展示区域 -->
        <div class="goodsCenter">
            <div class="goodsItem">

                <div class="left">
                    <img src="" alt="">
                </div>

                <div class="center">
                    husdfuasef
                </div>

                <div class="right">
                    <van-stepper v-model="value" theme="round" button-size="22" disable-input />
                </div>

            </div>
        </div>

        <div class="goodsbottom">
            <van-button plain hairline type="primary" color="grey" >下单</van-button>
            <van-button plain hairline type="primary" color="grey" >清空</van-button>
        </div>
        
    </div>

</template>

<script lang="ts">

    import { computed } from 'vue';
    import { defineComponent } from 'vue'
    import { useStore } from 'vuex';

    export default defineComponent({
        name: 'ShopCart',
        setup(){
            const store = useStore()
            const goodsNum = computed(() => store.getters.getGoodsNum)
            const value = 0

            return {
                store, goodsNum, value, 
            }
        }
    })
</script>

<style scoped>
.empty{
    margin-top: 5rem;
}
.goodstop{
    margin-top: 3rem ;
    margin-bottom: 2rem;
}
.goodsItem{
    position: relative;
    width: 100%;
    height: 5rem;
    margin-top: 1rem;
}
img{
    height: 100%;
}
.goodsCenter{
    position: relative;
    width: 100%;
    min-height: 5rem;
}
.left{
    position: absolute;
    height: 5rem;
    left: 1rem;
}
.center{
    position: absolute;
    top: 0.5rem;
    right: 1.5rem;
}
.right{
    position: absolute;
    bottom: 0.5rem;
    right: 1.5rem;
}
.goodsbottom{
    margin-top: 2rem;
    margin-bottom: 5rem
}
</style>