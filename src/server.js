import fs from 'fs';
import Koa from 'koa';
import cors from '@koa/cors';
import https from 'https'
import http from 'http'
import forceSsl from 'koa-force-ssl'
import path from 'path'
import Router from 'koa-router'
import Subdomain from 'koa-subdomain'

const app = new Koa();
const subdomain = new Subdomain();

import routerMain from './main/router.js'
import routerApi from './api/router.js'
import routerAuth from './auth/router.js'

/* Настройка поддоменов */
subdomain.use('api', routerApi.routes());
subdomain.use('auth', routerAuth.routes());

app.use(subdomain.routes());
app.use(routerMain.routes());

/* Запуск HTTP сервера */
http.createServer(app.callback()).listen(80);

/* Запуск HTTPS сервера */

/* Загрузка сертификатов */
const options = {
    // key: fs.readFileSync(path.resolve('./serts/private.key')),
    // cert: fs.readFileSync(path.resolve('./serts/certificate.pem')),
    // ca: fs.readFileSync(path.resolve('./serts/certificate_ca.crt'))
};

/* Запуск серверов */
// https.createServer(options, app.callback()).listen(443);
