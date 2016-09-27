# CSS Animation Learning Note

### 基本用法
主要是要定義animation持續的時間與要使用的animation keyframe (動畫關鍵影格)的名稱。
```css
    .div1 {
      animation-duration: 3s;
      animation-name: slidein;
    }
```

此外就要去定義你的animation keyframe，其中可以使用 from - to 或是 0% ~ 100% 兩種方式來使用：
* from - to: 動畫會是連續性的 (ex: @keyframes slidein)
* 0% ~ 100%: 動畫會根據你定義的break point來執行 (ex: @keyframes bigger)
```css
        @keyframes slidein {
          from {
            padding-left: 100%;
            width: 300%;
          }

          to {
            padding-left: 0%;
            width: 100%;
          }
        }

        @keyframes bigger {
            25%{
                font-size: 100%;
            }
            50%{
                font-size: 200%;
            } 
            75%{
                font-size: 300%;
            }
            100%{
                font-size: 100%;
            }
        }
```

* Sample code : [css-animation-sample]


### 重複播放動畫
增加此屬性animation-iteration-count，並給予要重複的次數即可，若無限次數就給infinite
```css
    .div1 {
        ...
      animation-iteration-count: 5;
    }
```

### 來回播放
如果要從頭放到尾，再從尾倒回去，將 animation-direction 這個屬性設定為 alternate
```css
    .div1 {
        ...
      animation-direction: alternate;
    }
```

### 動畫事件
和一般事件使用一樣，必須要註冊listener
```javascript
    function setup() {
      var e = document.getElementById("test");
      e.addEventListener("animationstart", listener, false);
      e.addEventListener("animationend", listener, false);
      e.addEventListener("animationiteration", listener, false);
    }
    function listener(e) {
      switch(e.type) {
        case "animationstart":
        console.log("Started: elapsed time is " + e.elapsedTime);
          break;
        case "animationend":
        console.log("Ended: elapsed time is " + e.elapsedTime);
          break;
        case "animationiteration":
        console.log("New loop started at time " + e.elapsedTime);
          break;
      }
    }
```

在一開始執行setup()這個function
```html
    <body onload="setup()">
        <div class="div1" id="test">[Hello into]</div>
    </body>
```

* Sample code : [css-animation-event-sample]



[css-animation-sample]: <https://github.com/sean1093/js-css-component/blob/master/css/animation-into-bigger.html>
[css-animation-event-sample]: <https://github.com/sean1093/js-css-component/blob/master/css/animation-event.html>



