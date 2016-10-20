# CSS RWD Note

### Media Query
CSS3開始的一種新使用方式，使用<code>@media</code> 來設定size breakpoint
舉例來說，以下只要browser window小於500px就會觸發
```css
@media only screen and (max-width: 500px) {
    body {
        background-color: blue;
    }
}
```

介於768~979
```css
@media (min-width: 768px) and (max-width: 979px) {
    body {
        background-color: blue;
    }  
}
```

當寬大於高的時候觸發，也就是像手機螢幕轉向的時候
```css
@media only screen and (orientation: landscape) {
    body {
        background-color: lightblue;
    }
}
```

### Mobile First
以手機為優先思考，如以下範例：

1. without mobile first
```css
/* For desktop: */
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}

@media only screen and (max-width: 768px) {
    /* For mobile phones: */
    [class*="col-"] {
        width: 100%;
    }
}
```

2. with mobile first
```css
/* For mobile phones: */
[class*="col-"] {
    width: 100%;
}
@media only screen and (min-width: 768px) {
    /* For desktop: */
    .col-1 {width: 8.33%;}
    .col-2 {width: 16.66%;}
    .col-3 {width: 25%;}
    .col-4 {width: 33.33%;}
    .col-5 {width: 41.66%;}
    .col-6 {width: 50%;}
    .col-7 {width: 58.33%;}
    .col-8 {width: 66.66%;}
    .col-9 {width: 75%;}
    .col-10 {width: 83.33%;}
    .col-11 {width: 91.66%;}
    .col-12 {width: 100%;}
}
```