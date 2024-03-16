## 怎么介绍项目？ 

- 完全可以安排的

- 全栈项目
    - VUE 全家桶  重点做
    - node 后端api服务 koa/express 登录 + post 表
    - ElementPlus 文章列表页面 登录页 

- 介绍项目
    - 后端API服务
        - sql 数据表设计  有什么功能  实现了什么功能  
            - user
                CREATE TABLE `user` (
                    `id` int(11) NOT NULL AUTO_INCREMENT, 
                    `name` varchar(255) NOT NULL,
                    `password` varchar(255) NOT NULL,
                    PTRIMARY KEY (`id`),
                    UNIQUE KEY `name` (`name`)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;  
                user 要尽量简单，因为他是最重要的， 次要的内容分表设计，有利于性能
        - avatar  用户的头像表 
            CREATE TABLE `avatar` (
                `id` int(11) NOT NULL AUTO_INCREMENT,
                `mimetype` varchar(255) NOT NULL,      (mimetype 文件格式)  
                `filename` varchar(255) NOT NULL,
                `size` int(11) NOT NULL,
                `user_id` int(11) NOT NULL,
                Primary KEY (`id`),
                KEY `user_id` (`user_id`),
                CONSTRAINT `avatar_user_id_fk` FOREIGN KEY (`user_id`) REFERENCS `user` (`id`)  
            )



            索引meet 查询  

- sql 是后端项目的核心 
- 面试官心态 就是要考察索引 
    - 主键索引 id   autoincrement
    - 唯一索引 name    不重复   
    - 普通索引  
        索引是为了提升查询的速度
        项目里使用了那些查询 加索引 
        分配相应的空间和数据结构 来加速查询  索引是数据库的主要性能瓶颈 
    - 外键索引    

    CREATE TABLE `comment` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `content` longtext NOT NULL,
        `postId` int(11) NOT NULL,
        `userId` int(11) NOT NULL,
        `parentId` int(11) DEFAULT NULL,
        PRIMARY KEY (`id`),
        KEY `postId` (`postId`),
        KEY `userId` (`userId`),
        KEY `parentId` (`parentId`),
    )
