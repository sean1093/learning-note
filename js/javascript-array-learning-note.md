# JavaScript Array Knowledage Learning Note

### parameter
建立 Array 的時候可以給予建構子參數

```js
// 給予1個整數當作參數時，會被當作建立 Array 的大小
var array_size = new Array(10);

// 給予多個用逗號隔開的參數時，這些值會被當作 Array 的 value
var array_value = new Array("Hello", "World");
```

### attribute
* constructor
* length

### check array
Array 是一種物件，要檢查的方法有幾種：
```js
var array = [];
console.log(typeof array); // object
console.log(Array.isArray(array)); //true
console.log(array instanceof Array); //true
```


### method
* push
用於在 array 後面多加一個新元素，並且回傳新的長度
```js
var array = ["Hello", "World"];
var len = array.push("Hi");

console.log(len); // 3
console.log(array); // ["Hello", "World", "Hi"]
```

* pop
用於取出 Array 最後一個值
```js
var array = ["Hello", "World", "Hi"];
var value = array.pop();

console.log(value); // "Hi"
console.log(array); // ["Hello", "World"]
```

* shift
用於取出 Array 第一個值
```js
var array = ["Hello", "World", "Hi"];
var value = array.shift();

console.log(value); // "Hello"
console.log(array); // ["World", "Hi"]
```

* sort
排序
```js
var array = [3,6,1,9,10,30];

// 排序預設會按照第一個數字來排
array.sort();
console.log(array); //[1, 10, 3, 30, 6, 9]

// 若要按照數字大小，需要加上這個 function
function sortNumber(a, b){return a-b;}
array.sort(sortNumber);
console.log(array); //[1, 3, 6, 9, 10, 30]

```


### Data structure
* Stack
使用 push, pop 來操作陣列就可以達成 stack 的效果
```js
var stack = [];
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
var stack = [];
// put
stack.push(1);
stack.push(2);
stack.push(3);
// get
console.log(stack.shift()); //1
console.log(stack.shift()); //2
console.log(stack.shift()); //3
```


