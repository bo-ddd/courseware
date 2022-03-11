#### git冲突解决方案

1. 在使用git提交代码时,通常流程是这样的
2. git status 
3. git add .
4. git commit -m "update code"
5. git pull
6. git push
7. 但是在 git pull时,有可能发生冲突,
8. 在代码冲突后,
9. 我们需要用  git status查看哪个文件冲突了
10. 然后在vscode中查看对应的文件
11. 把文件中的冲突进行选择和删除;
12. vscode自带 选择和删除功能
13. 可以手动选择  自己的代码为最新代码
14. 也可以选择 线上的代码为最新代码
15. 还可以选择两个代码都要
16. 在解决完冲突以后,
17. git status
18. git add .
19. git commit -m "fix merge"
20. git push
21. 结束