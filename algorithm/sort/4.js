function bubbleSort(arr) {
    console.time('改进冒泡排序');
    const length = arr.length;
    if (length <= 1) return;
    // 也许不用进行那么多轮， 提前已经排好了
    for (let i = 0; i < length - 1; i++) {
        let isSorted = true
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j],arr[j+1] =arr[j+1],arr[j]]
                isSorted = false
            }
        }
        if (isSorted) {
            break;
        }
    }
    console.timeEnd('改进冒泡排序')
    return arr
}

const arr = [5, 8, 6, 3, 9, 2, 1, 7]
bubbleSort(arr)
