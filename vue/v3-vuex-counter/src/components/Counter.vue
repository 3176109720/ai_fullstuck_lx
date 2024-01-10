<!-- 独立的模块， vue里面的组件 html + css + js 的集合 -->
<template>
    <!-- 结构 模板 -->
    <div>
        Cliked {{ count }} times, count is {{ evenOrOdd }}
        <button @click="increment"> + </button>
        <button @click="decrement"> - </button>
        <button @click="incrementIfodd"> Increment if odd </button>
        <button @click="incrementAsync"> Increment async </button>
    </div>
</template>

<script setup>
// 进货
import { useCounterStore } from '../store/couter'

const { count } = useCounterStore()
// // composition api

// // 数据和业务
// import { ref, computed } from 'vue'

// const count = ref(0) // 简单的响应式  reactive  复杂度响应式
// // 并不是独立的，与count相关，进行计算后拿到的
// const evenOrOdd = computed(() =>
//     count.value % 2 === 0 ? 'even' : 'odd')

// const increment = () => {
//     count.value++ // dom 不要 性能
// }
// const decrement = () => {
//     count.value--
// }
// const incrementIfodd = () => {
//     if (count.value % 2 === 0) {
//         count.value++
//     }
// }
// const incrementAsync = () => {
//     setTimeout(() => {
//         count.value++;
//     }, 1000);
// }

</script>

<style scoped></style>