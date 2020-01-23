import Router from 'koa-router'

const router = new Router()

router.get('/', async (ctx, next) => {
	ctx.body = 'API'
})

export default router