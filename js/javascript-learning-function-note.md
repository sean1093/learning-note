# JavaScript Function Learning Note

### 函數的宣告方式
ECMAScript 中定義三種宣告方式：Function Declarations, Function Expressions 以及 The Function() Constructor。

#### Function Declarations 函數陳述式

```js
function hello(a, b) {
    return a + b;
}
```

會有 Hoisting 的效果，JavaScript 會在執行前先解譯並加到執行環境(stack)中，ex:

```js

hello(1, 3); //可以正確被呼叫執行

function hello(a, b) {
    return a + b;
};

```


#### Function Expressions 函數表達式

```js
let hello = function(a, b) {
    return a + b;
};
```


### 函式的自我呼叫

#### 自我呼叫函數陳述式
```js

(function() {
    console.log("hello");
})();


!function hello() {
    console.log("hello hh");
}();

```





#### 自我呼叫函式表達式
```js
let hello = function(a, b) {
    console.log("hello");
}();
```





