const posts = require('../data/posts.js');

//index
function index(req, res) {
    res.send(posts);
}

//show
function show(req, res) {
    let id = parseInt(req.params.id);
    res.send(posts.find(post => post['id'] === id));
}

//store
function store(req, res) {
    res.send(`E' stato aggiunto un nuovo dolce`);
}

//update
function update(req, res) {
    res.send(`Modifica integrale del dolce ${req.params.id}`);
}


//modify
function modify(req, res) {
    res.send(`Modifica del dolce ${req.params.id}`);
}

//destroy
function destroy(req, res) {
    let id = parseInt(req.params.id);

    const dolceIndex = posts.findIndex(post => id === post.id);

    if (dolceIndex < 0) {

        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Dolce non trovato"
        });

    } else {
        posts.splice(dolceIndex, 1);
        console.log(posts);
        res.status(204);

    }
}


module.exports = { index, show, store, update, modify, destroy };