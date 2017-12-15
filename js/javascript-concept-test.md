# JavaScript Concept Test


1. 

```js
if (!("a" in window)) {
    var a = 1;
}
console.log(a);

// undefined
```

2.

```js
function a(x) {
    return x * 2;
}
var a;
console.log(a);

// ƒ a(x) {
//   return x * 2;
// }
```

3. arguments 與傳進來的值共用記憶體位置

```js
function b(x, y, a) {
    arguments[2] = 10;
    console.log(a);
}
b(1, 2, 3);

// 10
```

4.

```js
function a() {
    console.log(this);
}
a.call(null);

// windows object
```

5.

```js
["1", "2", "3"].map(parseInt);
// [1, NaN, NaN]
["1", "2", "3"].map((i) => parseInt(i));
// [1, 2, 3]
```

詳細解釋: http://blog.csdn.net/justjavac/article/details/19473199


6.

```js
function buildFunctions(){ 
    var arr = [];
    for(var i = 0; i < 3; i++){
        arr.push(
            function(){
                console.log(i);
            }
        )
    }
    return arr;
}
var fs = buildFunctions();
fs[0](); // 3
fs[1](); // 3
fs[2](); // 3
```

詳細解釋: https://pjchender.blogspot.tw/2016/05/javascriptclosure.html


7.

```js
function foo(){
    return this;
}
console.log( foo.call( foo ) )
// ƒ foo(){
//   return this;
//}
```

8.


```js
(function() {
	var a = b = 5;
})();
 
console.log(b); // 5
```

如果使用了 strict mode ，這種情況下就會報錯

```js
(function() {
   'use strict'
	var a = b = 5;
})();
 
console.log(b); // Uncaught ReferenceError: b is not defined
```

9.

JavaScript 中 this 所引用的是函數上下文，取決於函數是怎麼被使用，而不是他定義的時候

```js
var fullname = 'A';
var obj = {
    fullname: 'B',
    prop: {
        fullname: 'C',
        getFullname: function() {
            return this.fullname;
        }
    }
};
 
console.log(obj.prop.getFullname()); // C
 
var test = obj.prop.getFullname;
 
console.log(test()); // A
```
