# JavaScript Object Learning Note


### 建立物件
JavaScript 是以雛形為基礎的程式語言，透過使用 function 來建立類似 class 的功能 (ES6之後可以使用 class 關鍵字)。

#### 建構子 (Constructor)
建構子會在實例化 (Instantiation) 時被呼叫 (建立物件實例被建立時)。

Ex:
```js
var People = function(name){
    this.name = name;
    console.log("create");
};
People.prototype.sayHi = function() {
  console.log("I'm " + this.name);
};
var Tom = new People("Tom");
var Tony = new People("Tony");
// 會印兩次 "create" 因為在 new 物件的時候，會就去執行定義的 function

Tom.sayHi(); // I'm Tom
Tony.sayHi(); // I'm Tony

```


### Inheritance

Ex:
```js
function People(name, age) {
    this.name = name;
    this.age = age;
}
People.prototype.sayHi = function () {
    console.log("Hello, I'm "+this.name);
};
function Man(name, age) {
    // 用自己本身 this 去呼叫父類別的建構子，進而在自己的 this 去增加 name & age 兩種屬性
    People.call(this, name, age);
}
Man.prototype = new People();
// 也可以寫成以下這樣
// Man.prototype = Object.create(People.prototype);
// Man.prototype.constructor = Man

var sean = new Man("Sean", 123);
sean.sayHi(); 
console.log("People'name: "+sean.name);
console.log("People'age: "+sean.age);
console.log(sean); // Man's Object
console.log(Man.prototype); // People's Object

```

See more: 
https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#繼承



