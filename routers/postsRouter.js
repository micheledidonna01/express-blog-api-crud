const express = require('express');
const router = express.Router();
const posts = require('../data/posts.js');
let postsController = require('../controllers/postsController.js');

//index
router.get('/', postsController.index);

//show
router.get('/:id', postsController.show);

//store
router.post('/', postsController.store);

//update
router.put('/:id', postsController.update);

//modify
router.patch('/:id', postsController.modify);

//destroy
router.delete('/:id', postsController.destroy);


module.exports = router;