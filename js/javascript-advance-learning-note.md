# JavaScript Advance Knowledage Learning Note

## Callback / Higher-order Functions

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


## Promise (ES6)

從 ES6 之後才出現的，主要是可以避免層層 callback 造成所謂的 (callback hell)。

basic promise example:

```js
const promise = new Promise(function(resolve, reject) {
    if (true) {
        resolve("ok!");
    }
    else {
        reject(Error("It broke"));
    }
});

promise.then(function(result) {
    console.log(result); // "ok!"
}, function(err) {
    console.log(err); // Error: "It broke"
});

```

reference: https://eyesofkids.gitbooks.io/javascript-start-es6-promise/content/


## Arrow Function (ES6)

這是 ES6 對於 function 的簡潔寫法

```js
() => {function內容}
() => returnValue
(變數) => {function內容}
```

假如 function 內直接 return，也可以寫成

```js
const add = (a, b) => a+b
// 相當於
const add = (a, b) => { return a+b; }
```

只有一個參數時，括號也可以不加

```js
const add = a => a+3
```

舉例來說

```js
function a(key){ return key.length; }
const b = s => s.length;

console.log(a("aaa")); // 3
console.log(b("aaa")); // 3

const c = () => {console.log("hello");};
c();
```


## Template strings

ES6新增一個樣板字串的方式，可以讓串接字串與變數更加簡潔好懂

```js
const x = 10
console.log(`10 + 5 = ${x + 5}`);
// 10 + 5 = 15

const name = 'Sean';
console.log(`Hello ${name}! Hello world!`);
// Hello Sean! Hello world!
```

## default value

在以往 ES5 之前可以使用這種方法來做 default value

```js
function (name) {
    name = name || 'default';
    console.log('Hello, ' + name);
}
```

到了 ES6 之後，可以在 function 帶入預設值 (並且使用剛剛提到的 template strings)

```js
function (name = 'default') {
    console.log(`Hello,  ${name}`);
}
```

也可以使用表達式

```js
function func(a = 0, b = a + 10) {
    console.log(a + b)
}

func() // 10
func(1)  // 12
func(1, 2) // 3
```

或是使用另外的 function

```js
function func2(x) {
    return x + 10
}

function func(a = 1, b = func2(a)) {
    console.log(a + b)
}

func()  // 30
func(1)  // 12
func(1, 2) // 3
```

一個比較特殊的例子

詳細介紹可參考: https://eyesofkids.gitbooks.io/react-basic-zh-tw/content/day07_es6_default_param/#%E5%82%B3%E5%85%A5%E5%8F%83%E6%95%B8%E9%A0%90%E8%A8%AD%E5%80%BC%E4%BD%BF%E7%94%A8%E7%89%A9%E4%BB%B6%E3%80%81%E5%85%B6%E4%BB%96%E5%87%BD%E5%BC%8F%E8%88%87this%E6%99%82

```js
function func(x = this, y = this.value) {
  console.log(x)
  console.log(y)
}

func() // undefined
func({value: 'AAA'}) // undefined
func.call({value: 'BBB'}) // BBB
```

