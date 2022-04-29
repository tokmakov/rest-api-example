import PostService from './PostService.js';

class PostController {
    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            res.json(posts);
        } catch (e) {
            res.status(500).json({error: true, message: e.message})
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id)
            res.json(post)
        } catch (e) {
            res.status(500).json({error: true, message: e.message})
        }
    }

    async create(req, res) {
        try {
            console.log(req.body)
            const created = await PostService.create(req.body, req.files?.picture)
            res.json(created)
        } catch (e) {
            res.status(500).json({error: true, message: e.message})
        }
    }

    async update(req, res) {
        try {
            const updated = await PostService.update(req.body);
            res.json(updated);
        } catch (e) {
            res.status(500).json({error: true, message: e.message})
        }
    }

    async delete(req, res) {
        try {
            const deleted = await PostService.delete(req.params.id);
            res.json(deleted)
        } catch (e) {
            res.status(500).json({error: true, message: e.message})
        }
    }
}

export default new PostController()