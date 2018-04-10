# Git Learning Notes


## 新增或修改檔案

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

### git push origin master 

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


### branch 相關

#### 直接建立一個新的 branch

```zsh
$ git branch [BranchName]
```

#### 切換到某 branch

```zsh
$ git checkout [BranchName]
```


#### 建立 branch，並將目前工作目錄切換到新的 branch

```zsh
$ git checkout -b [BranchName]
```

#### 刪除 branch

不能刪除目前工作目錄所指定的 branch，必須先切換到其他 branch，再刪除目前這個 branch

```zsh
$ git branch -d [BranchName]
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

### 合併

當從 master 拉出新的 feature branch 或是 bugfix branch 的時候

#### git merge

用於合併兩個 branch，但注意合併時用 git merge [另一個分支] 來將另一個分支的變更合併回來，比如說要把一個 new_feature merge 回 master，就必須要先到 master branch，然後才去下 <code>git merge new_feature</code>

```zsh
$ git merge [BranchName]
```

### git rebase

可以將新的 branch 合併回 master，master 的 HEAD 會移動到 new branch 的 HEAD 這裡


可參考: https://backlog.com/git-tutorial/tw/stepup/stepup1_4.html


## 回復

TODO

### git revert

### git cherry-pick





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

## Reference

* https://github.com/doggy8088/Learn-Git-in-30-days/blob/master/zh-tw/README.md



