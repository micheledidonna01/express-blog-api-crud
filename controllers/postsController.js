const posts = require('../data/posts.js');

//index
function index(req, res) {
    let filterPosts = posts;
    let filterPostsIndex;
    if (req.query.tags) {
        filterPostsIndex = posts.findIndex(post => post.tags.includes(req.query.tags));

        if (filterPostsIndex < 0) {
            res.status(404);
            res.json({
                status: 404,
                error: "Not Found",
                message: "Dolce non trovato"
            });
            return;
        } else {
            filterPosts = posts.filter(post => post.tags.includes(req.query.tags));
            res.json(filterPosts);
        }
    } else {
        res.json(filterPosts);
    }

}

//show
function show(req, res) {
    let tags = req.query.tags;
    let id = parseInt(req.params.id);
    // console.log(tags);
    let post = posts.find(post => id === post.id);

    console.log(post);
    if (!post) {
        res.status(404);
        res.json({
            status: 404,
            error: "Not Found",
            message: "ID dolce non trovato"
        });
    } else {
        if(post.tags.includes(tags)){
            res.json(post);
        }else{
            res.status(404);
            res.json({
                status: 404,
                error: "Not Found",
                message: "Tags del dolce non trovato"
            });
        }
    }

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
    let tags = req.query.tags;
    let id = parseInt(req.params.id);
    // console.log(tags);
    let post = posts.find(post => id === post.id);
    let postIndex = posts.findIndex(post => id === post.id);
    console.log(postIndex);
    console.log(post);
    if (!post) {
        res.status(404);
        res.json({
            status: 404,
            error: "Not Found",
            message: "ID dolce non trovato"
        });
    } else {
        if(post.tags.includes(tags)){
            res.json(post);
        }else{
            posts.splice(postIndex, 1);
            res.status(404);
            res.json({
                status: 404,
                error: "Not Found",
                message: "Tags del dolce non trovato, Post eliminato!"
            });
        }
    }
    
}


module.exports = { index, show, store, update, modify, destroy };