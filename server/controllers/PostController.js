const PostService = require('../service/PostService')

class PostController {

  async addNewPost(req, res) {
    try {
      const {title, text, imgUrl} = req.body
      const post = await PostService.createPost({title, text, imgUrl})
      res.json(post)
    } catch (e) {
      console.log(e)
    }
  }

  async getPostById(req, res) {
    try {
      const {id} = req.params
      const post = await PostService.getPostById(id)
      res.json(post)
    } catch (e) {
      console.log(e)
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAllPosts()
      res.json(posts)
    } catch (e) {
      console.log(e)
    }
  }

  async removePost(req, res) {
    try {
      const {postId} = req.body
      await PostService.removePostById(postId)
      res.json({message: 'Success'})
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new PostController()
