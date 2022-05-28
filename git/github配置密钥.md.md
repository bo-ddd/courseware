### 配置ssh key
1. 设置git的user.name和email
2. 检查是否存在ssh key
3. 获取ssh key
4. github添加ssh key

文档来源： https://blog.csdn.net/u013778905/article/details/83501204


### 一. 设置git人user.name 和 email
```javascript
git config --global user.name "bigC"
git cofnig --global user.email "814151789@qq.com"
```

### 二. 检查是否存在ssh key
```javascript
cd ~/.ssh
ls
或者
ll
//看是否存在 id_rsa 和 id_rsa.pub 文件,如果存在，说明已经有ssh key
```

### 如果没有ssh key,则需要先生成一下
```javascript
ssh-keygen -t rsa -C "814151789@qq.com"
```

### 执行之后继续执行一下命令来获取ssh key
```javascript
cd ~/.ssh
ls或者
ll
//看是否存在 id_rsa 和 id_rsa.pub 文件,如果存在，说明应景有ssh key
```

### 三. 获取ssh key
```javascript
cat id_rsa.pub
//拷贝密钥 ssh-rsa 开头
```

### Github 添加ssh key
Github点击用户头像,选择setting
新建一个 ssh key 

