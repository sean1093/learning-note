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

## *args and **kwargs

在 function 參數傳遞的時候，*args and **kwargs 都代表了在接參數的時候可以不事先指定數目

差異是 *args 接值，**kwargs 接的是 key-value 的 pair

```python

def args_kwargs(arg1, arg2, arg3):
    print("arg1:", arg1)
    print("arg2:", arg2)
    print("arg3:", arg3)

>>> args = ("a", 1, 2)
>>> args_kwargs(*args)
arg1: a
arg2: 1
arg3: 2


>>> kwargs = {"arg3": 3, "arg2": "two", "arg1": 1}
>>> args_kwargs(**kwargs)
arg1: 1
arg2: two
arg3: 3
```

這裡要注意，如果想在同一個 function 同時使用，順序如下

```python
func(fargs, *args, **kwargs)
```


## reference
* http://www.runoob.com/python3/python3-tutorial.html
* https://openhome.cc/Gossip/CodeData/PythonTutorial/index.html
* https://github.com/qiwsir/ITArticles/blob/master/BasicPython/index.md