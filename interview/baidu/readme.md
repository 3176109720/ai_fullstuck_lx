- vue 深入语法
    <template>
        <div> 
            <div>1</div>
            <div>2</div>
        </div>
    </template>
    为什么要加view -> vn -> node -> 外层节点 -> 统一挂载
    统一外层节点 比较简单 方便的完成挂载
    缺点: 为了挂载而添加节点 洁癖 
    vue3 支持 不用在外层添加节点 

    <template>
        <div>1</div>
        <div>2</div>
    </template>
    Fragment 组件类型 文档碎片  document.creatFragmentElement
    node 的一种，挂载时起到容器的功能，并且会自动消失 

- const obj = {
    a:1 {
        b:1
    }
    c:"hello"
}
    const obj = reactive(obj)


- vue 组件的类型 vnode type 值 tag div|Component|文本|Fragment
    Flag 位运算 
- vue complie 源码
- 重写响应式
    - vue2 defineProperty  es5 支持  兼容性
        性能不好 一次只能代理一个属性 用多次遍历 深度  一开始就要递归
        数组 只支持 index 值修改  不支持 增删 移动位置
        新增的没有 defineProperty 不会
        改写数组的push pop unshift 。。。 方法 再添加 track 收集
        arr = [1,2,3]

    - vue3 proxy(reactive) + class getter setter(ref) 
        proxy 开销比较大(单个)   多个小的 
        拦截 + effect proxy + object  class get setter  
        proxy
        var obj = {
            a:1 {
                b:1
            } 
        }

        val obj ? get 
        return reactive(obj.a)
        懒代理 obj.a proxy get object new Proxy

    - vue3 响应式更优秀
        - ref(class getter setter) + reactive(proxy开销大)
            拦截 track trigger weakmap effect
        - proxy 可以一次性代理整个对象，支持多达13种拦截方法
        - 懒代理  需要的时候，才做深层次的代理(访问时，而不是一开始)，递归
        - defineProperty 一开始就要递归，遍历 一个个属性 代理 性能不好