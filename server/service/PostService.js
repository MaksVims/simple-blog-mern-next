const Post = require('../models/post-model')

class PostService {
  async createPost(post) {
    const newPost = new Post({...post})
    await newPost.save()
    return newPost
  }

  async getAllPosts() {
    return Post.find()
  }

  async getPostById(id) {
    return Post.findById(id)
  }

  async removePostById(id) {
    return Post.findByIdAndDelete(id)
  }
}

module.exports = new PostService()
