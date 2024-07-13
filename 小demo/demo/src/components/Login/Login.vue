<template>
    <!-- 轮播图（登录页） -->
    <div class="top">
        <van-swipe :autoplay="2000" lazy-render>
            <van-swipe-item v-for="image in images" :key="image">
                <img :src="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
    <div>
    <van-field
      v-model="user.name"
      name="账号"
      label="账号"
      placeholder="账号"
      :rules="[{ required: true, message: '请填写账号' }]"
    />
    <van-field
      v-model="user.password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    </div>
    <div>
        <van-button plain type="primary" color="grey" @click="clickButton(1)">登录</van-button>
        <van-button plain type="primary" color="grey" @click="clickButton(2)">清空</van-button>
    </div>
</template>

<script lang="ts">
    import { getCurrentInstance } from 'vue';
    import { defineComponent, reactive } from 'vue'
    import { showSuccessToast, showFailToast } from 'vant';

    export default defineComponent({
        name:'LoginHome',
        setup() {
            // 获取当前实例对象
            const {proxy} = getCurrentInstance() as any;

            const images = reactive([
            'https://file.xdclass.net/video/2021/1-lbt/VIP/vip1299.png',
            'https://file.xdclass.net/video/2021/62-paas/lbt-paas.png',
            'https://file.xdclass.net/video/2021/59-Postman/59lbt.png'
            ])
        
            // 保存登录信息
            const user = reactive({
                name:'',
                password:''
            })

            // 发送登录请求的方法
            function toLogin(){
                proxy.$http.post('/api/Login',{
                    name:user.name,
                    password:user.password
                })
                .then((res: any)=>{
                    if (res.data.code == 0){
                        showSuccessToast('登陆成功');
                        window.sessionStorage.setItem('token',res.data.data.token);

                        proxy.$router.push({
                            path:'/home'
                        });
                        
                    } else {
                        showFailToast('登陆失败');
                    }
                })
                .then((error: any)=>{
                    // console.log(error);
                })
            }
            

            function clickButton(value: number){
                if(value === 1){
                    if (user.name === '' || user.password === ''){
                        showFailToast('请输入账号和密码');
                        return;
                    }else{
                        toLogin();                        
                    }
                }else if(value === 2){
                    user.name = '';
                    user.password = '';
                }

            }

        return { images, user, clickButton};
  },
    })
</script>

<style scoped>
img{
    width: 100%;
}
.top{
    margin-bottom: 3rem;
}
</style>