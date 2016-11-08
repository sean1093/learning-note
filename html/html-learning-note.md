# HTML Learning Note

### viewport 
簡單說是畫面可看到的範圍，分為兩種：
* display viewport
* actual viewport
為了讓網頁能在手機上瀏覽正常，通常會把actual viewport的值給visual viewport
```html
<meta name=”viewport” content=”width=device-width”>
```

設定寬度為320px
```html
<meta name="viewport" content="width="320">
```
設定寬度為裝置的寬度
```html
<meta name="viewport" content="width=device-width">
```
設定縮放大小為1倍
```html
<meta name="viewport" content="initial-scale=1">
```
設定縮放大小最大為1倍，但使用此設定，使用者會無法藉由放大縮小來看也面的內容
```html
<meta name="viewport" content="maximum-scale=1">
```
設定寬度為裝置的寬度、縮放大小為1倍
```html
<meta name="viewport" content="width=device-width,initial-scale=1">
```


### DOM
DOM: W3C所定義的文件物件模型 Document Object Module


### HTML target Attribute
* _blank    : Opens the linked document in a new window or tab
* _self     : Opens the linked document in the same frame as it was clicked (this is default)
* _parent   : Opens the linked document in the parent frame
* _top      : Opens the linked document in the full body of the window
* framename : Opens the linked document in a named frame

![box-model](https://github.com/sean1093/learning-note/blob/master/img/html-target.png "target")

Demo page: [target-demo]

[target-demo]: <http://sean1093.github.io/demo/html-css-js/html-target-top.html>


