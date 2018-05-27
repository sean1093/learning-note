

# function

一些小的運算任務你可以使用 lambda，而較複雜的邏輯你可以使用 def 來定義

## def

使用 def 定義函數

```py
def function_name(parameters):
    expressions
```

## lambda

```py
function_name = lambda arg1, arg2, ...: expression
print(function_name(10, 3))
```

# global

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

# scope & LEGB