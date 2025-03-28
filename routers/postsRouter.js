const express = require('express');
const router = express.Router();
const posts = require('../data/posts.js')

//index
router.get('/', (req, res) => {
    res.send(posts);
});

//show
router.get('/:id', (req, res) => {
    res.send(posts.find(post => post['id'] === parseInt(req.params.id)));
});

//store
router.post('/', (req, res) => {
    res.send(`E' stato aggiunto un nuovo dolce`);
});

//update
router.put('/:id', (req, res) => {
    res.send(`Modifica integrale del dolce ${req.params.id}`);
});

//modify
router.patch('/:id', (req, res) => {
    res.send(`Modifica del dolce ${req.params.id}`);
});

//destroy
router.delete('/:id', (req, res) => {
    console.log(`Eliminazione del dolce ${req.params.id}`);
});


module.exports = router;