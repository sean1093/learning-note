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