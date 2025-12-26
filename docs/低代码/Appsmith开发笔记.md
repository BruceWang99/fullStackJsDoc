# Appsmith（PagePlug）开发笔记
## 项目启动

## 小程序组件开发

### 小程序组件开发流程

#### offline开发

+ CLI 命令生成Widget文件夹结构

```
cd app/client && yarn generate:widget (这个命令好像只支持web版本的)
```
这个命令目前没有直接放到小程序目录，需要手动移动到app/client/src/widgets/taro目录
放置目录： app/client/src/widgets/taro/
+ 在offline注册组件，显示在组件配置中
注册链接： app/client/src/utils/WidgetRegistry.tsx


#### 小程序内开发
+ 小程序组组件开发路径
app/taro/src/widgets/taro/
+ 小程序组件注册
app/taro/src/utils/WidgetRegistry.tsx 这个目录引入新组件注册


## 线上部署

### nginx 反向代理+ssl配置
```
server
    {
        listen 80;
        server_name www.test.com;
        access_log  /www/wwwlogs/access.log;
        return 301 https://$server_name$request_uri; #强制https
        location / {
            proxy_pass http://localhost:8080; #反向代理
        }
        access_log  /www/wwwlogs/access.log;
    }
    server
    {
        listen 443 ssl; #SSL 默认访问端口号为 443
        server_name www.test.com;#请填写绑定证书的域名
        location / {
            proxy_pass http://localhost:8080;
        }
        ssl_certificate /usr/local/nginx/cert/www.test.com_bundle.crt; #请填写证书文件的路径
        ssl_certificate_key /usr/local/nginx/cert/www.test.com.key; #请填写私钥文件的路径
        ssl_session_timeout 5m;
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
        ssl_prefer_server_ciphers on;
        
        access_log  /www/wwwlogs/access.log;
    }
```

## 问题记录
* 宝塔面板中相同镜像的不同版本不能同时创建compose项目，需要删除到唯一，才能创建项目
* 宝塔面板内存过高处理
如果你的 CentOS 系统的内存占用率过高，可以尝试以下几个方法来进行清理和优化：

查看内存占用：使用命令 free -h 或 top 来查看系统当前的内存占用情况。其中，free -h 可以显示内存使用情况的摘要信息，而 top 可以实时监控当前进程的资源占用情况。

查找内存占用过高的进程：使用 top 命令按 Shift+M 可以根据内存占用排序进程列表。记住占用内存最多的进程的 PID（进程 ID）。

结束占用内存过高的进程：可以使用 kill 命令结束指定 PID 的进程。例如，使用 kill 1234 结束 PID 为 1234 的进程。

释放内存缓存：Linux 会将一部分内存用于缓存文件系统，释放这些缓存可以提供更多内存给应用程序使用。可以使用以下命令来释放缓存：

sync
echo 1 > /proc/sys/vm/drop_caches
检查并优化应用程序设置：某些应用程序可能会使用过多的内存资源。你可以检查这些应用程序的配置文件，尝试调整其内存使用限制或优化相关设置。

检查内存泄漏：内存泄漏可能导致系统内存占用率持续增加。可以使用工具如 valgrind、mtrace 等来检测和修复内存泄漏问题。

调整内核参数：有时，通过调整内核参数可以减少内存占用。可以编辑 /etc/sysctl.conf 文件，并根据需要修改一些参数，如 vm.swappiness（控制交换分区的使用）、vm.vfs_cache_pressure（控制文件系统缓存释放的速度）等。

请注意，在进行任何系统优化操作之前，建议先备份重要数据，并确保对系统的了解和操作具备一定的经验，以避免意外情况发生。
* linux 查看进程运行的具体位置
要查看Linux上进程的具体位置，可以使用以下命令：

使用ps命令查找进程PID（进程ID）：

ps -ef | grep <进程名>
使用lsof命令结合进程PID查看进程运行的具体位置：

lsof -p `<PID>`
使用readlink命令查看进程的可执行文件路径：

`readlink /proc/<PID>/exe`
下面是对每个步骤的进一步解释：

使用ps命令查找进程PID：ps -ef命令可以列出当前系统上所有进程的详细信息。通过管道符（|）将输出传递给grep命令，并指定要搜索的进程名，以过滤出与该进程名相关的进程。

使用lsof命令结合进程PID查看进程运行的具体位置：`lsof -p <PID>`命令会显示指定PID的进程打开的文件和网络连接等信息。在输出中，可以查找包含可执行文件路径的行（比如COMMAND列）。

使用readlink命令查看进程的可执行文件路径：在Linux系统中，每个进程都有一个对应的`/proc/<PID>/exe`符号链接，指向该进程的可执行文件。通过使用readlink命令，可以直接读取该符号链接的目标路径，从而获得进程可执行文件的具体位置。

请注意，上述命令需要在具有足够权限的用户下运行（例如root用户或具有适当权限的用户）。
