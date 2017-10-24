# JavaScript Advance Knowledage Learning Note

### Callback / Higher-order Functions
簡單來說，callback是將函式當作另一個函式的參數，並且由另外的函式來呼叫。
一個簡單的例子:

```js

function first(callback){
    console.log("first");
    // Make sure the Callback is a function
    if (callback && typeof(callback) === "function") {
        callback();
    }
}

function second(){
    console.log("second");
}

first(second); // 注意這裡傳進去的參數是 second 而不是 second()
/*
   將 second 這個 function 當作參數傳入 first()，在 first 內容執行完才去呼叫這個 callback (second function)，達到做完事後呼叫的效果。
   會印出：
        first
        second
*/

```

See more: https://www.impressivewebs.com/callback-functions-javascript/

### Promise (ES6)
從 ES6 之後才出現的，主要是可以避免層層 callback 造成所謂的 (callback hell)。
//TODO
basic promise example
```js
var promise = new Promise(function(resolve, reject) {

    if (true) {
        resolve("ok!");
    }
    else {
        reject(Error("fail"));
    }
});

promise.then(function(result) {
    console.log(result); // "ok!"
}, function(err) {
  console.log(err); // Error: "It broke"
});

```


note: https://eyesofkids.gitbooks.io/javascript-start-es6-promise/content/


### Arrow Function (ES6)

這是 ES6 對於 function 的簡潔寫法

```js
() => {function內容}
() => returnValue
(變數) => {function內容}
```

假如 function 內直接 return，也可以寫成

```js
let add = (a, b) => a+b
// 相當於
let add = (a, b) => { return a+b; }
```

只有一個參數時，括號也可以不加

```js
let add = a => a+3
```

舉例來說

```js
function a(key){ return key.length; }
var b = s => s.length;

console.log(a("aaa")); // 3
console.log(b("aaa")); // 3

var c = () => {console.log("hello");};
c();
```


## Template strings

ES6新增一個樣板字串的方式，可以讓串接字串與變數更加簡潔好懂

```js
const x = 10
console.log(`10 + 5 = ${x + 5}`);
// 10 + 5 = 15

const name = 'Sean';
console.log(`Hello ${name}!
Hello world!`);

// Hello Sean! Hello world!

```