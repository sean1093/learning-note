# Python basic knowledge

## 變數

Python 中變數不需要宣告，有以下六種基本類型
* 不可變：Number（數字）、String（字串）、Tuple（元组）、Sets（集合）；
* 可變：List（列表）、Dictionary（字典）

### Tuple

與 list 相似，只是內容不能修改

```py
name = "Sean"
id = 100
counter = 100.5
```


## function

一些小的運算任務你可以使用 lambda，而較複雜的邏輯你可以使用 def 來定義

### def

使用 def 定義函數

```py
def function_name(parameters):
    expressions
```

### lambda

```py
function_name = lambda arg1, arg2, ...: expression
print(function_name(10, 3))
```


如果在 function 中宣告了 global，就可以使用並且修改 global 的值

```py
APPLY = 100 # 全局变量
a = None
def fun():
    global a    # 使用之前在全局里定义的 a
    a = 20      # 现在的 a 是全局变量了
    return a + 100

print(APPLE)    # 100
print('a past:', a)  # None
fun()
print('a now:', a)   # 20
```

## yield and generator 

yield 跟 return 很像，只是 return 的時候 function call stack 會被清掉，下一次再 call 會重新來。yield 則是下次呼叫時，可以從上次還未執行到的部分繼續執行，而不是重新建立一個新 stack。

可以使用 next & send

* next

```python
def yield_function():
    i = 0
    yield i
    i = 1
    yield i
     
generator = yield_function()
print generator.next()
print ('restart')
print generator.next()
```

會印出

```zsh
0
restart
1
```

或是使用變數去接 yield

```python
def yield_function():
    i = 0
    a = yield i
    i = 1
    yield a
     
generator = yield_function()
print generator.next()
print ('restart')
print generator.next()
```

會印出

```zsh
0
restart
none
```

* send

可以從呼叫 function 的地方得到參數帶入 yield

```python
def yield_function():
    i = 0
    a = yield i
    i = 1
    yield a
     
generator = yield_function()
print generator.next()
print ('restart')
print generator.send(8)
```

會印出

```zsh
0
restart
8
```


## scope & LEGB

https://segmentfault.com/a/1190000000640834

## reference
* http://www.runoob.com/python3/python3-tutorial.html
* https://openhome.cc/Gossip/CodeData/PythonTutorial/index.html