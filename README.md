# Конфигурация webpack для сборки веб-сервера Koa

Данная конфигурация позволяет запускать koa сервер на локальном сервере, на продакшен сервере, а так же собирать проект в бандл

## Запуск и сборка

Для разворачивания и сборки требуется выполнить команды в консоли:

```
# Установка зависимостей
npm install

# Запуск локального стенда по адресу localhost:80
npm run dev

# Сборка исходников проекта в билд
npm run build

# Запуск веб-сервера из под pm2 (для запуска требуется выполнить сборку проекта)
npm run start
```


Для запуска HTTPS сервера требуется получить SSL сертификат и поместить их в директорию "serts", после чего добавить в "./src/server.js" данные для запуска:

```
/* Пути до файлов SSL сертификатов */
const options = {
    key: fs.readFileSync(path.resolve('./serts/private.key')),
    cert: fs.readFileSync(path.resolve('./serts/certificate.pem')),
    ca: fs.readFileSync(path.resolve('./serts/certificate_ca.crt'))
};

/* Запуск серверов */
https.createServer(options, app.callback()).listen(443);
```