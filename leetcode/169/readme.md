# 多数元素

- 排序  O (nlogN)     1/2
- 空间换时间 Map + count + major 值作为key 

## 面试官想了解什么
- 算法简单 利用排序
- 能不能优化一下 具体开发，O (n) 的时间复杂度
- 背后的算法思想？  投票算法
    投票
    nums[i]  coumt 1
    nums[i+1]  coumt 0
    nums[i+2]  coumt 1
    nums[i+3]  coumt 2
    count 边界  尝试下一个数

- 数组众数问题，可以使用投票算法O(n)时间复杂度，O(1)空间复杂度漂亮解决问题。

    


    