----------------- 
function func() { 
let i = 0 
return () => { 
i++ 
return i 
} 
} 
const func1 = func() 
const func2 = func() 
func1() // 1 
func2() // 2 
func1() //3 
func2() // 4 
func1 === func2// 

----------------- 
var a = 2; 
function AA（） { 
console.log(a); // undefined 
let a = 1; 
} 
AA();

----------------- 
setTimeout(function() { 
console.log(1) 
}, 0); 
new Promise(function(resolve) { 
console.log(2); 
for(var i = 0; i < 10000; i++) { 
if (i === 9999) { 
resolve(); 
} 
} 
console.log(3); 
}).then(function() { 
console.log(4); 
}); 
console.log(5);

----------------- 
Function.prototype.a = () => alert(1) 
Object.prototype.b = () => alert(2); 
function A() {} 
const a = new A(); 
a.a(); //1 
a.b();// 2

----------------- 
Proimse.half = function(arr) { 
} 
有一半成功，就立即返回[res, res] 
低于一半， 就返回null
function myHalf(promise){
    return new Promise((resolve, reject)=>{
        const res = []
        let n = 0
        let ful = 0
        let re = 0

        // function callback(){
        //     if(promise.length === n){
        //         resolve(res)
        //     }
        // }

        for(let i = 0;i<promise.length;i++){
            promise[i].then((value)=>{
                res.push(promise[i])
                ful = ful + 1
                if(ful >= (promise.length)/2){
                    resolve(res)
                }
            }).catch((reason)=>{
                // res.push({ status:'rejected',reason })
                res.push(promise[i])
                re = re + 1
                if(re >= (promise.length)/2){
                    reject(null)
                }
            }).finally(()=>{
                n = n + 1
            })
        }


    })
}

----------------- 
输出右视图：
def rightTree(self, root):
    def dfs(root, l):
        if not root:
            return
        if l == len(res):
            res.append(root.val)
        right = dfs(root.right, l + 1)
        left = dfs(root.left, l + 1)
    res = []
    l = 0
    dfs(root, l)
    return res

