import Router from 'express'
import PostController from './PostController.js'

const postRouter = new Router()

// все посты блога
postRouter.get('/post', PostController.getAll)
// создание поста блога
postRouter.post('/post', PostController.create)
// один пост блога
postRouter.get('/post/:id', PostController.getOne)
// обновление поста блога
postRouter.put('/post', PostController.update)
// удаление поста блога
postRouter.delete('/post/:id', PostController.delete)

export default postRouter;