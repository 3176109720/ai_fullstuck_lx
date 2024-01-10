// 数据要共享， store 
// store 数据仓库， 
// 组件  小卖铺里的货架 
// 进货
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// vue3 hooks 编程 
export const useTodosStore = defineStore('todolist', () => {
    const count = ref([{text:'多刷录播', done:false}]);
    return {
        count 
    }
})