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

## def

使用 def 定義函數

```py
def function_name(parameters):
    expressions
```

## global

如果在 function 中宣告了 global，就可以使用並且修改 global 的值

```py
APPLY = 100 # 全局变量
a = None
def fun():
    global a    # 使用之前在全局里定义的 a
    a = 20      # 现在的 a 是全局变量了
    return a+100

print(APPLE)    # 100
print('a past:', a)  # None
fun()
print('a now:', a)   # 20
```

## scope & LEGB


## reference
* http://www.runoob.com/python3/python3-tutorial.html
* https://openhome.cc/Gossip/CodeData/PythonTutorial/index.html