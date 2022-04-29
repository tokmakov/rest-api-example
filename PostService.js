import Post from './Post.js'
import FileService from './FileService.js'

class PostService {
    async getAll() {
        const posts = await Post.find()
        return posts
    }

    async getOne(id) {
        if (!id) {
            throw new Error('Не указан id поста')
        }
        const post = await Post.findById(id)
        if (!post) {
            throw new Error('Пост блога не найден')
        }
        return post
    }

    async create(data, image) {
        const picture = FileService.save(image)
        const {title, content, author} = data
        const created = await Post.create({title, content, author, picture})
        return created
    }

    async update(data) {
        if (!data._id) {
            throw new Error('Не указан id поста')
        }
        const updated = await Post.findByIdAndUpdate(data._id, data, {new: true})
        if (!updated) {
            throw new Error('Пост блога не найден')
        }
        return updated
    }

    async delete(id) {
        if (!id) {
            throw new Error('Не указан id поста')
        }
        const deleted = await Post.findByIdAndRemove(id)
        if (!deleted) {
            throw new Error('Пост блога не найден')
        }
        return deleted
    }
}

export default new PostService()