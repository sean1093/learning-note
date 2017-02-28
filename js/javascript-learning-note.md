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
var obj1 = {text: 'same'};
var obj2 = {text: 'same'};
//obj1 跟 obj2 不會相等

var obj1 = {text: 'same'};
var obj2 = obj1;
//此時 obj1 跟 obj2 才會相等，因為他們參考同一個物件
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
