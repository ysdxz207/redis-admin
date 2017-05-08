# redis-admin

run:

`git clone https://github.com/ysdxz207/redis-admin.git`

> change redis config in redis/redis.js
```js
var redis = require('redis'),
    RDS_PORT = 6379,        //redis port
    RDS_HOST = '127.0.0.1',    //redis server ip
    RDS_PWD = '123456',         //redis password
    RDS_OPTS = {},            //
    client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);
```

`npm install`

`node app.js`

open http://localhost:3000

template use ejs