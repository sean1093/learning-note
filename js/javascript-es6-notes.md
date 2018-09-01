# ES6 new feature

## Symbol

ES6 出現可以解決名稱衝突的第七種類型

舉例來說以往定義常數：

```js
const chartType = {
    line: 'line123',
    bar: 'bar123'
}
```

當我們使用的時候，事實上變數內的內容並不重要，只需要不要重複即可

ES6 可改為利用 Symbol，為一不重複的類型

```js
const chartType = {
    line: Symbol(),
    bar: Symbol()
}
```

reference: 
https://zhuanlan.zhihu.com/p/22652486
http://es6.ruanyifeng.com/#docs/symbol

## Set and Map

### Set

類似於 array，但是內容不能重複

```js
const set = new Set([4, 5, 6, 7, 2, 5, 6, 2, 2, 2]);

for (let s of set) {
  console.log(s);
}

// 只會印出 4, 5, 6, 7, 2
```

#### Set function

* size(): 回傳 Set 大小
* add(value): 加入新值，回傳 Set 本身
* delete(value): 刪除一個值，回傳成功與否的 boolean
* has(value): 回傳有無特定值 boolean
* clear(): 清除所有元素，no return
* keys: 回傳 keys 的 iterator 
* values: 回傳 values 的 iterator 
>  Set 只有值，所以 keys and values 兩者會一樣
* entries: 回傳 keys+values 的 iterator 
> Set 只有值，所以兩者會一樣 => [key, value] 

#### WeakSet

### Map

讓 JavaScript object 中的 key 可以使用 string 以外的型態。




## Generator

Generator 函數是一個狀態機，他封裝了多個內部狀態

1. 函數宣告必須要加上 *
2. 函數使用 yield 來定義不同的“狀態”
3. 當函式走到 yield 的時候會先停止，然後把右邊的 expression 丟到外面
4. Generator 也是一個 Iterator object，使用 next 來調用

http://es6.ruanyifeng.com/#docs/generator

```js
function* generator1() {
  yield 'hello';
  yield 'world';
  return 'end';
}

const g1 = generator1();

g1.next()
> {value: "hello", done: false}
g1.next()
> {value: "world", done: false}
g1.next()
> {value: "end", done: true}
g1.next()
> {value: undefined, done: true}

```

```js
function* gen(x){
  var y = yield x + 2;
  console.log(`(1) x: ${x} | y: ${y}`)
  yield y + 10;
  console.log(`(2) x: ${x} | y: ${y}`)
  return y;
}

var g = gen(1);
g.next(5) 
> {value: 3, done: false}
g.next(10) 
> (1) x: 1 | y: 10
> {value: 20, done: false}
g.next(100) 
> (2) x: 1 | y: 10
> {value: 10, done: true}
g.next(1) 
> {value: undefined, done: true}
```

