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






