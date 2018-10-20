# Regularization 

Model 就是一堆  W0 * W1 + W1 * X1 + ... + Wn * Xn
x 是 feature
train 的過程是去找一組 w 來使得這個多項式最符合 data，或是錯誤最少

L1 正規化 w 取絕對值
L2 正規化 w 取平方

為了控制正規化 (tune the overall impact of the regularization)，會加上一個 lambda


Early stopping



