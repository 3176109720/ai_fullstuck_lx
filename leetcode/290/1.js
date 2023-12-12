var wordPattern = function(pattern, s) {
    const a = s.split(' ')
     if (pattern.length !== a.length) return false
     const h = Array(a.length)
     for (let i = 0; i < a.length; i++) {
         h[i] = pattern[i] + ',' + a[i] // 无原生元组，用逗号分隔表示，唯一即可
     }
     const len = new Set(h).size
     return len === new Set(pattern).size && len === new Set(a).size
 };