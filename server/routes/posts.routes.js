const {Router} = require('express')
const PostController = require('../controllers/PostController')

const router = Router()

router.post('/add',PostController.addNewPost)
router.get('/', PostController.getAll)
router.get('/:id', PostController.getPostById)
router.post('/remove', PostController.removePost)

module.exports = router
