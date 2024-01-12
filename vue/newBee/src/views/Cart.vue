<template>
  <div class="cart-box">
    <SimpleHeader title="购物车" :back="false" />

    <div class="cart-body">
      <van-checkbox-group v-model="result" @change="groupChange">
        <van-swipe-cell v-for="item in list" :key="item.goodsId">
          <van-checkbox :name="item.cartItemId"></van-checkbox>
          <van-card :num="item.goodsCount" :price="item.sellingPrice" :title="item.goodsName" class="goods-card"
            :thumb="item.goodsCoverImg">
            <template #footer>
              <van-stepper v-model="item.goodsCount" min="1" max="5" :name="item.cartItemId" @change="numChange" />
            </template>
          </van-card>

          <template #right>
            <van-button square @click="deleteGoods(item.cartItemId)" text="删除" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
      </van-checkbox-group>
    </div>

    <van-submit-bar class="submit-bar" :price="totaPrice * 100" button-text="提交订单" @submit="onSubmit">
      <van-checkbox class="checkAll" v-model="checkAll" @click="allCheck">全选</van-checkbox>
    </van-submit-bar>

    <NavBar />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import SimpleHeader from '../components/SimpleHeader.vue';
import { ref, onMounted, computed } from 'vue';
import { getCart, modifyCart, deleteCartItem } from '@/api/cart.js';
import { storeKey, useStore } from 'vuex';

const result = ref([]);
const list = ref([]);
const checkAll = ref(false)
const store = useStore()


const init = async () => {
  const { data } = await getCart({ pageNumber: 1 })
  // console.log(data);
  list.value = data
  result.value = data.map(item => item.cartItemId)
}

onMounted(async () => {
  init()
})

const groupChange = () => {  // 选中商品
  // console.log(result.value);
  checkAll.value = (result.value.length === list.value.length && result.value.length > 0) ? true : false  
}

const numChange = async (value, detail) => {   // 修改数量
  // console.log(value, detail)
  const params = {
    cartItemId: detail.name,
    goodsCount: value
  }
  await modifyCart(params)
}
const onSubmit = () => {  // 提交订单

}
const allCheck = () => {  // 全选
  if (checkAll.value) {
    result.value = list.value.map(item => item.cartItemId)
  } else {
    result.value = []
  }
}
const totaPrice = computed(() => {  // 计算总价  计算属性中的依赖变量有变动时会重新计算
  let _list = list.value.filter((item) => result.value.includes(item.cartItemId))
  const allPrice = _list.reduce((pre, item, index, arr) => {
    return pre += item.sellingPrice * item.goodsCount
  }, 0)
  return allPrice
})

const deleteGoods = async (id) => {  // 删除商品
  await deleteCartItem(id)
  init()
  store.dispatch('setCartCountAction')
}
</script>

<style lang="less" scoped>
.cart-body {
  margin: 16px 0 100px 0;
  padding-left: 10px;
}
</style>
<style>
.van-swipe-cell__wrapper {
  display: flex;
}

.van-card.goods-card {
  width: 100%;
  background-color: #fff;
}

.van-checkbox {
  width: 23px;
}

.delete-button {
  height: 100%;
}

.van-card__footer {
  position: absolute;
  right: 16px;
  bottom: 8px;
}

.van-card__num {
  position: absolute;
  right: 0px;
  top: 0;
}

.van-submit-bar {
  bottom: 50px;
}

.checkAll {
  width: 60px;

}
</style>
