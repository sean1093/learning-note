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
    + (+/-)
```js
"3" + 4 + 5    //"345"
3 + 4 + "5"    //75

9 - "3"        //6
"9" - 3        //6
9 + "3"        //"93"
"9" + 3        //"93"

9 - "3" - "2"  //4
```

    + (&& / ||)
```js
//default value
var name = UserName || "default";
```

