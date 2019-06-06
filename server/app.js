const Koa = require ('koa')
const cors = require('@koa/cors');
const bodyparser = require('koa-bodyparser')
const app = new Koa()

const router = require('./router')

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 204 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


app
    .use(bodyparser())
    .use(cors(corsOptions))
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3001, () => {
        console.log(`Server running on :3001`)
    });
