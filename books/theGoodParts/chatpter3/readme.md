# map
- Map是什么

   Map类型是键值对的有序列表，而键和值都可以是任意类型

- Map与Set的区别
 
  Set是一种叫做集合的数据结构，Map是一种叫做字典的数据结构

  集合-----是由一堆无序的、相关联的，且不重复的内存结构【数学中称为元素】组成的组合
  字典-----是一些元素的集合。每个元素有一个称作key 的域，不同元素的key 各不相同

  Set集合是以[值，值]的形式存储元素，
  Map字典是以[键，值]的形式存储

- 增删改查
     - size
    size属性返回 Map 结构的成员总数。

      - const map = new Map();
        map.set(‘foo’, true);
        map.set(‘bar’, false);
        map.size  

    - set()
    设置键名key对应的键值为value，然后返回整个 Map 结构

    如果key已经有值，则键值会被更新，否则就新生成该键

    同时返回的是当前Map对象，可采用链式写法

      - const m = new Map();
        let fn = function(){}
        m.set('edition', 6)        // 键是字符串
        m.set(fn, 'standard')     // 键是函数
        m.set(undefined, 'nah')    // 键是 undefined
        m.set(1, 'a').set(2, 'b').set(3, 'c') // 链式操作

    - get()
    get方法读取key对应的键值，如果找不到key，返回undefined

      - const m = new Map();
        const hello = function() {console.log('hello');};
        m.set(hello, 'Hello ES6!') // 键是函数
        m.get(hello)  // Hello ES6!

    - has()
    has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中

      - const hashMap = new Map();
        hashMap.set('edition', 6);
        hashMap.set(262, 'standard');
        hashMap.set(undefined, 'nah');
        hashMap.has('edition')     // true
        hashMap.has('years')       // false
        hashMap.has(undefined)     // true

    - delete()
    delete方法删除某个键，返回true。如果删除失败，返回false

      - const m = new Map();
        m.set(undefined, 'nah');
        m.has(undefined)     // true
        m.delete(undefined)
        m.has(undefined)       // false

    - clear()
    clear方法清除所有成员，没有返回值

      - let map = new Map();
        map.set('wife', true);
        map.set('car', false);
        map.size // 2
        map.clear()
        map.size // 0

- 遍历

  - keys()：返回键名的遍历器
    values()：返回键值的遍历器
    entries()：返回所有成员的遍历器
    forEach()：遍历 Map 的所有成员
    const map = new Map([
      ['A', 'no'],
      ['B',  'yes'],
    ]);

    //keys()
    for (let key of map.keys()) {
      console.log(key);       // "A"  "B"
    }

    //values()
    for (let value of map.values()) {
      console.log(value);    // "no"  "yes"
    }

    // entries()
    for (let item of map.entries()) {
    console.log(item[0], item[1]);
    }
    // "A" "no"  、"B" "yes"

    // 或者
    for (let [key, value] of map.entries()) {
      console.log(key, value);
    }
    // "A" "no" 、"B" "yes"

    // 等同于使用map.entries()
    for (let [key, value] of map) {
      console.log(key, value);
    }
    // "A" "no"  、 "B" "yes"

    map.forEach(function(value, key, map) {
      console.log(key, value);    // "A" "no"  、 "B" "yes"
    });