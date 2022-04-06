#/bin/bash

# 设置环境变量到 environment variable
echo  "
set \$API_SERVER  $API_SERVER;
set \$FILE_SERVER $FILE_SERVER;
" > /etc/nginx/conf.d/server.variable