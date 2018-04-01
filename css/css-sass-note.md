# SASS Learning Note

Sass（Syntactically Awesome Stylesheets），一種基於 CSS 的前置語言，在 css3 推出之後有著更接近 CSS 寫法的 SCSS。

## 安裝與環境設定


## 語法

### Variables 

scss 可以使用變數，使用 $ 開頭

變數可以再進行作加減乘除餘運算，甚至字串與顏色色碼也可以進行運算

```scss
$color: red;

p {
    background-color: $color;
}

span {
    background-color: $color;
}
```

### Nesting 

可以簡化寫法並且減少重複性

```scss
.parent {
    color: red;
    .child {
        font-size: 12px;
    }
}
```

在 css 的話會是長這樣

```css
.parent {
    color: red;
}

.parent .child {
    font-size: 12px;
}
```


另一種做法可以使用 & 來代替父元素

```scss
.parent{
  &:hover{}
  &.child-class{}
}
```

編譯完的 CSS 為

```css
.parent:hover{}
.parent.child-class{}
```


### Mixin 

類似函式或是一群值的組合，可以在其他區塊使用 @include 來匯入使用 @mixin 定義過的。經常用於需要相符不同瀏覽器品牌的 CSS3 宣告上。

舉例來說:

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.block { 
    @include border-radius(10px); 
}
```

@mixin 也可以使用預設值

```scss
@mixin border-radius($radius: 10px) {
    ...
}
```

### Functions

如同一般程式語言的函數使用

```scss
@function calc-width ($col) {
  @return 100% / $col;
}

.col-two {
  width: calc-width(2); // spans 2 columns, width = 50%
}

.col-three {
  width: calc-width(3); // spans 3 columns, width = 33.3%
}
```
