# git 大厂代码提交原则

- 开发目录
    pwd 可以获取当前的目录地址  一切皆文件
    git init 
    初始化代码目录为代码仓库
    - 反馈成功初始化一个代码仓库
        git 仓库不能嵌套
        .git 文件夹 包含着仓库的秘密，不要去动它
        默认 master/main 主分支
        HEAD 指针指向第一次提交
        暂存区和仓库两部分
- 本地代码仓库
- git 是一个版本控制系统，一个免费开源的软件
    仓库里放的是文件的多个版本
- 为什么把一个文件添加到仓库需要
    git add
    git commit  两步呢？
    严格的代码提交
    git add 用于添加一个文件/修改 单位是文件   Intml Css Js 三个文件构成一任务 login页的开发
    git commit -m 'login页开发完成'
    1: n 仓库 
    git add 把文件添加到暂存区 stage 
    git commit 把文件提交到仓库了 

- git 是一个分布式的
    本地仓库
    远程仓库
    合作伙伴的仓库

- 严格
    代码提交前一定要慎重
    查看当前修改和上一次修改 改了 那些地方
    git diff 可以帮助我们比较修改的地方 再提交前使用该命令
- commit -m '' 不能乱写，必须要写清楚完成了什么任务
    - leader以后就看-m 后的东西了解我们的工作
- git status 随时使用这个命令了解我们当前仓库的状态
- git log 
    打印所有的提交
    唯一的ID hash
    HEAD 指针，指向目前的最后一次提交
    master 代表分支 main 
    git log --oneline  汇总所有记录

- 可以通过git reset 快速来到任务一个版本
    version control 秒懂了，小猪

- git reset --hard id 可以回到前面的操作
    git reflog 查看所有的操作记录

- changes + untracked 



git add .
git commit -m 'login页开发完成'
git push origin main