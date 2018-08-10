# git sharing notes

sharing by Eddie Kao @ 20180809

## Git 不做差異備份

* 記錄版本
    + 不同版本都是重新存一版本，每次切換的時候直接抽
    + 有的版本控制是每一版本記錄差異，每次切換的時候重算
* 佔儲存空間，但速度快
    + 由於 git 是每次存一份新的版本，所以相對以往的版控會很佔空間
    + 開發的人認為未來儲存空間會越來越便宜，用空間換時間
    + 每次切 branch or commit 的時候就像抽葡萄一串抽起來，不需要重新計算

## Branch

* 開分支不用錢 => 因為只是在 commit 上貼上標籤，標籤檔案很小
* 砍 branch
    + git branch -D xxx ==> 實際上是把標籤撕掉，commit 都還在
    + 要回復只要把標籤貼回去，找到 hash code 就可以復原

## Tag 

* 是不會動的，branch 的標籤會隨著改變而移動

## Rebase

* 修改歷史，減少 merge 時出現的不必要節點

## Reset

* 比較像 goto, become
* 參數決定後面的 commit 要怎麼處理，預設是 --mixed
* 就算 Hard reset 之後只要知道 hash code 都一樣救的回來
* Git reset HEAD^ 倒退一步，^^^^ 就是倒退四步
* ORIG_HEAD: git 在做 merge rebase reset 等等的時候會自動留記錄點

## Common Question

* 合併過的 branch 還需要留著嗎？

都可以，因為他只是張佔很小空間的貼紙

* 可以一個 branch 都不留嗎？

可以把Head直接指到某一個 commit 上，不需要 branch

實務上是做得到的，但沒有意義