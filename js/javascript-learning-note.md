# JavaScript Basic Knowledage Learning Note


### Variable

有三種宣告方式：

* var (函式作用域(function scope))
* const (ES6, 區塊作用域(block scope)): 常數宣告，不可改變的值
* let (ES6, 區塊作用域(block scope)): 變數宣告，在for迴圈中每次都會重新綁定

Let 只會在目前的 { } 內有效，而且重覆定義時會 throw Error 

Const 只會在目前的 { } 內有效，定義時必須 initialize，而且不能更改

延伸閱讀：http://ithelp.ithome.com.tw/articles/10185142

### Number

* String to Number

```js
//by 10-digit
parseInt("123", 10) //123
parseInt("010", 10) //10

//by 2-digit
parseInt("11", 2); //3
```

If input not number

```js
parseInt("hihi", 10); //NaN
```

* NaN

NaN + number = NaN

```js
NaN + 30 //NaN
```

check NaN

```js
isNaN(NaN) //true
```

* Max & Min

可使用

```js
Number.MAX_VALUE
Number.MIN_VALUE
```

### String

* number to 2-digit string

```js
let num = 5;
num.toString(2); //"101"
```

* operator

+/-

```js
"3" + 4 + 5    //"345"
3 + 4 + "5"    //75

9 - "3"        //6
"9" - 3        //6
9 + "3"        //"93"
"9" + 3        //"93"

9 - "3" - "2"  //4

"1.1" + "1.1" = "1.11.1"
(+"1.1") + (+"1.1") = 2.2
```

&& / ||

```js
//default value
let name = UserName || "default";
```

* sub string 

取出子字串最佳的方法是使用 <code>slice</code>

給予的兩個參數，開始的 index A，結束的 index B，子字串會位於 A ~ Ｂ-1

```js
str.slice(start[, end])

'abcde'.slice(0,3) //"abc"
'abcde'.slice(1,3) //"bc"

```

### call by reference

```js
//obj1 跟 obj2 不會相等
let obj1 = {text: 'same'};
let obj2 = {text: 'same'};
console.log(obj1 == obj2); //false
console.log(obj1 === obj2); //false

//此時 obj1 跟 obj2 才會相等，因為他們參考同一個物件
let obj1 = {text: 'same'};
let obj2 = obj1;
console.log(obj1 == obj2); //true
console.log(obj1 === obj2); //true
```

指定物件值的方法不同，會影響是使用 call by reference 或是 call by value

```js
// call by reference
let obj1 = {text: 'same'};
let obj2 = obj1;
obj1.text = 'change';

console.log(obj1.text); //change
console.log(obj2.text); //change


//假如用 object literal 的方式指定物件的值，那麼會是 call by value
let obj1 = {text: 'same'};
let obj2 = obj1;
obj1 = {text: 'change'};

console.log(obj1.text); //change
console.log(obj2.text); //same
```


### 原始值與複合值

#### 原始值

String, Number, Boolean, null, undefined

不是物件，儲存"值" (by value)，被稱作原始值的原因是他們已經無法再複雜了。

Ex: 
```js
let a1="Hello";
let a2 = a1;
a2 = "World";
//此時a1還是"Hello"
```

#### 複合值

Object(), Array(), Function(), Date(), Error(), RegExp(), Nunmber(), String(), Boolean()

因為他們裡面可能會有一個或多個的原始值，像是物件，由 JavaScript 物件構成，儲存"參考" (by reference)。

Ex:

```js
let myObject={};
let object2 = myObject;
object2.text = "Hello";
//此時myObject跟object2都會有text = "Hello"這個屬性
```

#### 常見錯誤

你沒有透過 new 去建構，就會被轉換為原始值，舉例來說:

```js
const st1 = String('st1');
const st2 = new String('st2');
console.log(typeof st1); // string
console.log(typeof st2); // object
```


* 相同的原始值比較，不論 == 或是 === 都會是 true
* 相同的複合值比較，不論 == 或是 === 都會是 false
* 但如果是相同的原始值與複合值比較，== 會是 true ，但 === 因為記憶體位置不同會是 false

以 string 來做比較: 

```js
'aaa' == 'aaa'
true
'aaa' === 'aaa'
true
new String('aaa') == 'aaa'
true
new String('aaa') === 'aaa'
false
new String('aaa') == new String('aaa')
false
new String('aaa') === new String('aaa')
false
```


### null & undefined

* undefined：未定義，代表缺少某個事物
* null：目前無法使用某個會出現得值
* 驗證

null/undefined 的時候一定要用 ===，因為 == 無法分辨 null & undefined

```js
null  == undefined // true
null === undefined // false
```

null 與其他數值做相加減，會視為0

```js
let n = null;
console.log(n * 100); // 0
console.log(n + 100); // 100
```

### typeof

這裡注意比較特別的是
* NaN 的 typeof = 'number'
* null 的 typeof = 'object'
* undefined 的 typeof = 'undefined'

```js
console.log(typeof 10)              //'number'
console.log(typeof NaN)             //'number'
console.log(typeof '')              //'string'
console.log(typeof true)            //'boolean'
console.log(typeof null)            //'object'
console.log(typeof undefined)       //'undefined'
console.log(typeof function(){})    //'function'
console.log(typeof (typeof 10))     //'string'
```



### setTimeout

```js
console.log("start");
for(var i=0; i<5; i++){
    setTimeout(function(){ 
        console.log(i); 
    }, 1);
}
console.log("end");

/* 
it will console:
    start
    end
    5
    5
    5
    5
    5
*/

console.log("start");
for(var i=0; i<5; i++){
    var j = i;
    setTimeout(function(){ 
        console.log(j); 
    }, 1);
}
console.log("end");

/* 
it will console:
    start
    end
    4
    4
    4
    4
    4
*/

// 使用let來當告變數(ES6)
console.log("start");
for(let i=0; i<5; i++){
    setTimeout(function(){ 
        console.log(i); 
    }, 1);
}
console.log("end");

/* 
it will console:
    start
    end
    0
    1
    2
    3
    4
*/
```

### JavaScript Bitwise Operators
位元運算子把他們的運算元視為一組 0 or 1，對這些二進制表示法進行運算，並返回標準的 JavaScript 數值。

#### 位元邏輯運算子
* a & b (AND): 兩個都是1才等於1
* a | b (OR): 只要其中一個或是兩者都為1就等於1
* a ^ b (XOR): 其中一個是1才會回傳1，兩個都是1的話會回傳0
* ~ a (NOT): x -> -(x+1)

Ex:
* 15 & 9 = 9 (1111 & 1001 = 1001)
* 15 | 9 = 15 (1111 | 1001 = 1111)
* 15 ^ 9 = 6 (1111 ^ 1001 = 0110)
* ~ 0 = -1
* ~~ 3 = 3
* ~~ null = 0
* ~ true = -2 (true -> 1, ~1 = -2)
* ~~ true = 1

#### 位元位移運算子
* 左移: a << b, 左移 a 的 b 位元，從右邊補 0。
* 維持符號右移: a >> b, 右移 a 的 b 位元，丟棄移出的位元。
* 填 0 右移: a >>> b, 右移 a 的 b 位元，丟棄移出的位元，並從左邊補 0。

* Reference

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise_operators

http://acm.nudt.edu.cn/~twcourse/BitwiseOperation.html



### Scope

```js
if (true) {
    let x = 5;
}
console.log(x); //5


function a(){
    let y = 11;
}
console.log(y) //Uncaught ReferenceError: y is not defined
```



### Hoisting

> Hoisting is JavaScript's default behavior of moving declarations to the top. 
> JavaScript Declarations are Hoisted
> JavaScript Initializations are Not Hoisted
> -- w3schools

JavaScript中，它會把定義的變項移到最前面先執行。

舉例來說，我們用兩種不同方式定義了 fun1 & fun2，其中 fun2 是用匿名 funtion 再指定到 fun2 變數，最後 console.log & 執行 fun1, fun2, fun3

```js
console.log(window.fun1); // 會印出 fun1
console.log(window.fun2); // undefined
console.log(window.fun3); // undefined
fun1('fun1'); // fun1
fun2('fun2'); // Uncaught ReferenceError: fun2 is not defined
fun3('fun3'); // 不會執行，因為 fun2() 就已經先錯了，但如果他執行的話也是會顯示 Uncaught ReferenceError: fun3 is not defined

function fun1(params) {
    this.name = 'fun1';
    console.log(this.name)
}

const fun2 = function (params) {
    this.name = 'fun2';
    console.log(this.name)
}
```

原因是程式一開始執行的時候，就已經把 function fun1(){....} & const fun2 這些宣告(declare) 都先存到記憶體，但是還沒把 value 指定進去 fun2 當中，因此 fun2 才會是 undefined

reference: https://pjchender.blogspot.tw/2015/12/javascript-hoisting.html





* See more
http://javascript.ruanyifeng.com/



