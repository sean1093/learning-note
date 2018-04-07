# Git Learning Notes

## 常用指令

### 新增或修改檔案

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

### git add .

Changes to be committed，也可以使用 <code>git add < file name ></code>

```zsh
On branch master
Your branch is up-to-date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   others/git-learning-notes.md
        modified:   others/tool-notes.md
```

### git commit

建立一個commit (Your branch is ahead of 'origin/master' by 1 commit.)

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


## Reference

* https://github.com/doggy8088/Learn-Git-in-30-days/blob/master/zh-tw/README.md



