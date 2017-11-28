# JavaScript Array Knowledage Learning Note

## Basic konwledge

### parameter

建立 Array 的時候可以給予建構子參數

```js
// 給予1個整數當作參數時，會被當作建立 Array 的大小
const array_size = new Array(10);

// 給予多個用逗號隔開的參數時，這些值會被當作 Array 的 value
const array_value = new Array("Hello", "World");
```

### attribute

* constructor
* length

### check array

Array 是一種物件，要檢查的方法有幾種：

```js
const array = [];
console.log(typeof array); // object
console.log(Array.isArray(array)); //true
console.log(array instanceof Array); //true
```


## function

以下為一些常用的重要 function

### push

用於在 array 後面多加一個新元素，並且回傳新的長度

```js
const array = ['Hello', 'World'];
const len = array.push('Hi');

console.log(len); // 3
console.log(array); // ['Hello', 'World', 'Hi']
```

### pop

用於取出 Array 最後一個值

```js
const array = ['Hello', 'World', 'Hi'];
const value = array.pop();

console.log(value); // 'Hi'
console.log(array); // ['Hello', 'World']
```

### shift

用於取出 Array 第一個值

```js
const array = ['Hello', 'World', 'Hi'];
const value = array.shift();

console.log(value); // 'Hello'
console.log(array); // ['World', 'Hi']
```

### join

用於把陣列合併成一個字串

```js
var a = ['A', 'B', 'C'];
a.join();    // 'A,B,C'
a.join('-'); // 'A-B-C'
a.join(''); // 'ABC'
```

### slice & splice

這兩個函數都是可以取出 sub-array

* slice 用法

與 String 的 slice 是一樣的，給予的兩個參數，開始的 index A，結束的 index B，子字串會位於 A ~ Ｂ-1

* splice 用法

第一個參數為起始 index，第二個為要刪除的數量

```js
[4,6,8,3,9].slice(0,3)  // [4, 6, 8]
[4,6,8,3,9].splice(0,3) // [3, 9]

[4,6,8,3,9].slice(3,2)  // [] ==> 因為 index 3~2 不是一個正確的區間

const array = [4,6,8,3,9,4,5,6]
// 表示從 index 3 開始刪掉 2 個數，return 要刪除的部分
const removed = array.splice(3,2)
// array 剩下 remove 完的長相
console.log(array)      // [4, 6, 8, 4, 5, 6]
// return 要刪除的部分
console.log(removed)    // [3, 9]

```

差別差在 slice 不會更改原來的陣列，splice 會更改原來的陣列

```js
let array = [4,6,8,3,9]
array.slice(0,3)
console.log(array) //[4, 6, 8, 3, 9]
array.splice(0,3)
console.log(array) //[3, 9]

```

### filter

從 array 中找出回傳 true 的 element

ex: 找出陣列中小於 5 的數字

```js
const newArray = [2,6,10,9,3,7,5,4,-1].filter((e) => {
    if (e < 5) return true;
    else return false;
})
// newArray = [2, 3, 4, -1]
```

### map

對 array 中所有 element 處理過後再回傳新的 array

ex: 把所有陣列中大於 5 的數字減 5，小於等於 5 的數字加 5

```js
const newArray = [2,5,7,9].map((e) => {
    if (e > 5) return e - 5;
    else return e + 5;
})
// newArray = [7, 10, 2, 4]
```

### sort

預設的 sort 陣列會根據各個字元的 Unicode 碼位值排列，或根據每個元素轉換為字串，所以會出現 11 會排在 2 前面這種情況，因此我們通常必須加上 compareFunction

ex: 一些在 https://developer.mozilla.org 上的經典例子

```js
let fruit = ['apples', 'bananas', 'Cherries'];
fruit.sort(); // ['Cherries', 'apples', 'bananas'];

let scores = [1, 2, 10, 21]; 
scores.sort(); // [1, 10, 2, 21]

let things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']

// 在Unicode中, 數字在大寫字母前,
// 大寫字母在小寫字母前
```

#### compareFunction

* 觀念:

1. compareFunction(a, b) return 小於 0, 將 a 排在比 b index 還小處
2. compareFunction(a, b) return 0, a 與 b 互相不會改變順序
3. compareFunction(a, b) return 大於 0, 將 b 排在比 a index 還小處

最常見的例子就是實作 sort by number

```js
const array = [8,10,3,6,1,39];
array.sort();
// ==> [1, 10, 3, 39, 6, 8]

const array2 = [8,10,3,6,1,39];
// 這裡利用 a-b ，如果 a < b 這樣就會回傳負數值，a 就會被排在比 b index 還小處
array2.sort((a,b)=> a-b)
// ==> [1, 3, 6, 8, 10, 39]

```

### reduce

這是一個可以作為累加器的 function

```js
Array.prototype.reduce(
  (accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
  },
  initValue
);

// example

[0, 1, 2, 3, 4].reduce( (prev, curr) => prev + curr ); // 10

[0, 1, 2, 3, 4].reduce( (prev, curr) => prev + curr, 10 ); // 20

```

### some & every

這兩個函數都是去查詢 array 中有沒有符合自訂 function 中的條件，不同的是 some 只有有一個符合條件(使 function return ture)就會立即回傳 True，every的話必須要所有都符合才會回傳 True。

```js
[4,6,8,3,9].some( (v) => v > 5 )  // true

[4,6,8,3,9].every( (v) => v > 5 ) // false

[4,6,8,3,9].every( (v) => v > 2 ) // true
```

### find & findIndex

這兩個函數是去查詢 array 中出現符合自訂 function 中的"第一個"特定元素，差別只在於 find 會回傳 value，findIndex 回傳 index，詳細如下

```js
[4,6,8,3,9].find( (v) => v > 6 )       // 8
[4,6,8,3,9].findIndex( (v) => v > 6 )  // 2

// 當找不到的時候
[4,6,8,3,9].findIndex( (v) => v > 10 ) // -1
[4,6,8,3,9].find( (v) => v > 10 )      // undefined
```


## Data structure

使用 array 可以完成一些基本的資料結構

### Stack

使用 push, pop 來操作陣列就可以達成 stack 的效果

```js
const stack = [];
// put
stack.push(1);
stack.push(2);
stack.push(3);
// get
console.log(stack.pop()); //3
console.log(stack.pop()); //2
console.log(stack.pop()); //1
```

* Queue

使用 push, shift 來操作陣列就可以達成 queue 的效果

```js
const stack = [];
// put
stack.push(1);
stack.push(2);
stack.push(3);
// get
console.log(stack.shift()); //1
console.log(stack.shift()); //2
console.log(stack.shift()); //3
```
