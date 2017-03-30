# JavaScript Basic Knowledage Learning Note

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
    +  NaN + number = NaN
```js
NaN + 30 //NaN
```

    + check NaN
```js
isNaN(NaN) //true
```

### String
* number to 2-digit string
```js
var num = 5;
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
```

&& / ||
```js
//default value
var name = UserName || "default";
```


### call by reference

```js
//obj1 跟 obj2 不會相等
var obj1 = {text: 'same'};
var obj2 = {text: 'same'};
console.log(obj1 == obj2); //false
console.log(obj1 === obj2); //false

//此時 obj1 跟 obj2 才會相等，因為他們參考同一個物件
var obj1 = {text: 'same'};
var obj2 = obj1;
console.log(obj1 == obj2); //true
console.log(obj1 === obj2); //true
```

指定物件值的方法不同，會影響是使用 call by reference 或是 call by value
```js
// call by reference
var obj1 = {text: 'same'};
var obj2 = obj1;
obj1.text = 'change';

console.log(obj1.text); //change
console.log(obj2.text); //change


//假如用 object literal 的方式指定物件的值，那麼會是 call by value
var obj1 = {text: 'same'};
var obj2 = obj1;
obj1 = {text: 'change'};

console.log(obj1.text); //change
console.log(obj2.text); //same
```


### 原始值與複合值
* 原始值
String, Number, Boolean, null, undefined
不是物件，儲存"值"

Ex: 
```js
var a1="Hello";
var a2 = a1;
a2 = "World";
//此時a1還是"Hello"
```

* 複合值
Object(), Array(), Function(), Date(), Error(), RegExp()
由JavaScript物件構成，儲存"參考"

Ex:
```js
var myObject={};
var object2 = myObject;
object2.text = "Hello";
//此時myObject跟object2都會有text = "Hello"這個屬性
```

### null & undefined
* undefined：未定義，代表缺少某個事物
* null：目前無法使用某個會出現得值
* 驗證 
null/undefined 的時候一定要用 ===，因為 == 無法分辨 null & undefined


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
```

### JavaScript Bitwise Operators
位元運算子把他們的運算元視為一組 0 or 1，對這些二進制表示法進行運算，並返回標準的 JavaScript 數值。

#### 位元邏輯運算子
* a & b (AND): 兩個都是1才等於1
* a | b (OR): 只要其中一個或是兩者都為1就等於1
* a ^ b (XOR): 其中一個是1才會回傳1，兩個都是1的話會回傳0
* ~ a (NOT): 0->1, 1->0

Ex:
* 15 & 9 = 9 (1111 & 1001 = 1001)
* 15 | 9 = 15 (1111 | 1001 = 1111)
* 15 ^ 9 = 6 (1111 ^ 1001 = 0110)

#### 位元位移運算子
* 左移: a << b, 左移 a 的 b 位元，從右邊補 0。
* 維持符號右移: a >> b, 右移 a 的 b 位元，丟棄移出的位元。
* 填 0 右移: a >>> b, 右移 a 的 b 位元，丟棄移出的位元，並從左邊補 0。

* Reference

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise_operators

http://acm.nudt.edu.cn/~twcourse/BitwiseOperation.html

* See more
http://javascript.ruanyifeng.com/



