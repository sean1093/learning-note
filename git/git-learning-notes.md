# Git Learning Notes

## 基礎設定 & concept

### user

一開始必須要做初始化的設定，若有 --global 參數，只需要做這工作一次，不論 Git 做任何事都會採用此資訊

```zsh
$ git config --global user.name "Sean Chou"
$ git config --global user.email "xxxx@gmail.com"
```

### ssh key

大多數 Git 伺服器都會選擇使用 SSH 公開金鑰來進行授權。以 github 為例:

首先先建立一個 ssh key

```zsh
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

use command line to copy key 

```zsh
$ clip < ~/.ssh/id_rsa.pub
```

接著只要到 github 帳號設定葉面去做新增就可以了

在 github 的教學頁面寫得很詳細:

https://help.github.com/articles/connecting-to-github-with-ssh/


### 檔案的狀態

新增的檔案 -> Untracked files
改動過的檔案 -> Changes not staged for commit

```zsh
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   others/tool-notes.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        others/git-learning-notes.md

no changes added to commit (use "git add" and/or "git commit -a")
```


## 常用指令

### git status

最常使用來查看當前狀態

```zsh
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

nothing to commit, working tree clean
```

### git add .

新增檔案到 Changes to be committed，也可以使用 <code>git add < file name ></code>

```zsh
On branch master
Your branch is up-to-date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   others/git-learning-notes.md
        modified:   others/tool-notes.md
```

### git commit

建立一個 commit (Your branch is ahead of 'origin/master' by 1 commit.)

```zsh
$ git commit -m 'update note'
[master 44bbba3] update note
 2 files changed, 20 insertions(+), 1 deletion(-)
 create mode 100644 others/git-learning-notes.md
```

### git reset

會把剛剛的 add 動作回復，但假如已經 commit 是不會回復的

```zsh
$ git reset
Unstaged changes after reset:
M       others/tool-notes.md
```

若要 復原 commit <code>git reset HEAD~1</code> 

```zsh
$ git reset HEAD~1
Unstaged changes after reset:
M       others/tool-notes.md
```

### git pull

抓取遠端的資料下來

```zsh
$ git pull origin master
```

* notes:
  + git pull = git fetch + git merge 
  + git pull --rebase = git fetch + git 


### git push

push commit to master branch

```zsh
$ git push origin master
Counting objects: 5, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 761 bytes | 761.00 KiB/s, done.
Total 5 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To github.com:sean1093/learning-note.git
   213a81d..44bbba3  master -> master
```

### git stash

當你有一些修改還不想 commit 但卻要切 branch 的時候，可以使用 stash 來暫存狀態

```zsh
$ git stash
Saved working directory and index state WIP on master: 3cff597 update git learning notes
```

查看所有 stash list

```zsh
$ git stash list
stash@{0}: WIP on master: 3cff597 update git learning notes
```

要套用回來的時候，使用 apply / pop 指令，會預設使用 stash 中最新的一筆

* apply: 套用之後還會保留這筆 stash
* pop: 套用之後會刪除這筆 stash

```zsh
$ git stash apply
$ git stash pop
```

或是也可以指定某一個 stash

```zsh
$ git stash apply stash@{0}
```

如果要清除所有的 stash，使用 clear

```zsh
$ git stash clear
```


### git log

可以查看 log

```zsh
$ git log
commit 394f125673b91e3ad8ea9066557e0d7768a0267f (HEAD -> master, origin/master, origin/HEAD)
Author: sean1093 <sean1093@gmail.com>
Date:   Sat Apr 7 11:18:04 2018 +0800

    update readme

    ...  
```

為了方便檢視 log，可以下 --oneline 的參數

```zsh
$ git log --oneline
72c2388 (HEAD -> master, origin/master, origin/HEAD) update notes
6afe45e update css notes
d23426d update git notes
45f049f update git learning notes
d20b007 update javascript notes
589dac7 update git learning notes
3cff597 update git learning notes
394f125 update readme
...
```

如果想要讓 log 有 tree 結構化的顯示方式

可以下

```zsh
$ git log --decorate --graph --oneline --abbrev-commit --all
```

P.S. 詳細參數設定都可以去 --help 裡面看

## branch 相關

### 直接建立一個新的 branch

```zsh
$ git branch [BranchName]
```

### 切換到某 branch

```zsh
$ git checkout [BranchName]
```


### 建立 branch，並將目前工作目錄切換到新的 branch

```zsh
$ git checkout -b [BranchName]
```

### 查看 loacl branch 與他的 remote branch

```zsh
$ git branch -vv 
```

### 刪除 branch

不能刪除目前工作目錄所指定的 branch，必須先切換到其他 branch，再刪除目前這個 branch

```zsh
$ git branch -d [BranchName]
```

## 合併

當從 master 拉出新的 feature branch 或是 bugfix branch 的時候

### git merge

用於合併兩個 branch，但注意合併時用 git merge [另一個分支] 來將另一個分支的變更合併回來，比如說要把一個 new_feature merge 回 master，就必須要先到 master branch，然後才去下 <code>git merge new_feature</code>

```zsh
$ git merge [BranchName]
```

### git rebase

可以將新的 branch 合併回 master，master 的 HEAD 會移動到 new branch 的 HEAD 這裡。使用 rebase 的話會影響到歷史紀錄。


可參考: 

https://backlog.com/git-tutorial/tw/stepup/stepup1_4.html

https://gitbook.tw/chapters/branch/merge-with-rebase.html


## 回復

### git reset

當需要直接回復到某一個 commit 時，可以直接使用 git reset，但要注意的是，之後的 commit 都會被清除掉。

舉例來說

先使用 git log 去看一下目前狀態

```zsh
$ git log --oneline
72c2388 (HEAD -> master, origin/master, origin/HEAD) update notes
6afe45e update css notes
d23426d update git notes
45f049f update git learning notes
d20b007 update javascript notes
589dac7 update git learning notes
3cff597 update git learning notes
```

如要要回復到 d20b007 update javascript notes

```zsh
$ git reset d20b007 
```

### git revert

> 新增一個 Commit 來反轉（或說取消）另一個 Commit 的內容，原本的 Commit 依舊還是會保留在歷史紀錄中。雖然會因此而增加 Commit 數，但通常比較適用於已經推出去的 Commit，或是不允許使用 Reset 或 Rebase 之修改歷史紀錄的指令的場合。
>
> https://gitbook.tw/chapters/rewrite-history/reset-revert-and-rebase.html


### git cherry-pick

只撿某些 Commit 來用

先使用 git log {SHA} 來列出所有的 commit

```zsh
$ git log --oneline
72c2388 (HEAD -> master, origin/master, origin/HEAD) update notes
6afe45e update css notes
d23426d update git notes
45f049f update git learning notes
d20b007 update javascript notes
589dac7 update git learning notes
3cff597 update git learning notes
394f125 update readme
```

再使用 cherry-pick {...SHA} 撿回來使用

```zsh
git cherry-pick 72c2388 d23426d 589dac7
```


## 其他操作

### git reflog

可找回每次動作的 SHA，以方便做回復

```zsh
$ git reflog
394f125 (HEAD -> master, origin/master, origin/HEAD) HEAD@{0}: commit: update readme
9b5a32d HEAD@{1}: commit: update git notes
44bbba3 HEAD@{2}: commit: update note
213a81d HEAD@{3}: reset: moving to HEAD~1
2d07678 HEAD@{4}: reset: moving to HEAD
2d07678 HEAD@{5}: commit: update note
213a81d HEAD@{6}: reset: moving to HEAD
213a81d HEAD@{7}: commit: add react notes link
f8a333e HEAD@{8}: pull: Fast-forward
1988afd HEAD@{9}: commit: update readme
0082292 HEAD@{10}: commit: update readme
4fb23db HEAD@{11}: commit: update notes
8002120 HEAD@{12}: commit: update notes
9078656 HEAD@{13}: commit: update
3da8796 HEAD@{14}: commit: update note
6c0dd65 HEAD@{15}: reset: moving to HEAD~
4db1183 HEAD@{16}: commit: update
```

## Pull Request

詳見另一章節: 

https://github.com/sean1093/learning-note/blob/develop/others/git-pull-request-notes.md


## Reference

* https://gitbook.tw/
* https://github.com/doggy8088/Learn-Git-in-30-days/blob/master/zh-tw/README.md



