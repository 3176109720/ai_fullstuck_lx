<template>
    <!-- 轮播图 -->
    <div>
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in images" :key="image">
                <img :src="image.img" />
            </van-swipe-item>
        </van-swipe>
    </div>
    <!-- 热门视频 -->
    热门视频
    <div class="hotVideos">
        <van-grid :border="false" :column-num="2">
            <van-grid-item v-for="(item,index) in hotVideos" :key="index" @click="toCart(item)">
                <van-image :src="item.img"/>
            </van-grid-item>
        </van-grid>
    </div>

</template>

<script lang="ts">
    import { getCurrentInstance, defineComponent, ref } from 'vue';
    import { useStore } from 'vuex';
    import { showSuccessToast } from 'vant';

    export default defineComponent({
        name: 'HomeTop',
        setup () {
            const { proxy }: any = getCurrentInstance()

            const store = useStore()
            const images = ref<any>(null)
            const hotVideos = ref<any>(null)

            // 获取首页轮播和热门视频数据
            function getSource() {
                proxy.$http.get('/api/homePhoto')
                .then((res: any) =>{                   
                    if(res.data.code == 0){
                        images.value = res.data.data[0].bannerList
                        hotVideos.value = res.data.data[1].videoList
                    }         
                })
                .catch((error: any)=> {
                    console.log(error);  
                })
            }
            getSource()

            // 添加商品到购物车
            function toCart(item: any){
                // console.log(item);
                showSuccessToast('添加购物车成功');

                store.commit('toCart',item);
                store.commit('getCart');
            }

            return {
                images, hotVideos, toCart,
            }
        },
    })

</script>

<style scoped>
img{
    width: 100%;
}
.hotVideos{
    margin-bottom: 3rem;
}
</style>