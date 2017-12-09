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













```js

```

