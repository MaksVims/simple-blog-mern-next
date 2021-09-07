import axios from "axios";

export default class PostService {

  static async addNewPost(title, text, imgUrl) {
    return await axios.post('http://localhost:5000/api/post/add', {title, text, imgUrl})
  }

  static async getPostById(id) {
    const res = await axios.get(`http://localhost:5000/api/post/${id}`)
    return res.data
  }

  static async getAllPost() {
    const res = await axios.get(`http://localhost:5000/api/post/`)
    return res.data
  }

  static async removePost(postId) {
    return await axios.post(`http://localhost:5000/api/post/remove`, {postId})
  }

}
