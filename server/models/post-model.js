const {Schema, model} = require('mongoose')

const PostSchema = new Schema({
  title: {type: String, required: true},
  text: {type: String, required: true},
  imgUrl: {type: String, required: true},
})

module.exports = model('Post', PostSchema)
