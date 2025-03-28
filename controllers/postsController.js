const posts = require('../data/posts.js');

//index
function index(req, res){
    res.send(posts);
}

//show
function show(req, res){
    res.send(posts.find(post => post['id'] === parseInt(req.params.id)));
}

//store
function store(req, res){
    res.send(`E' stato aggiunto un nuovo dolce`);
}

//update
function update(req, res){
    res.send(`Modifica integrale del dolce ${req.params.id}`);    
}


//modify
function modify(req, res){
    res.send(`Modifica del dolce ${req.params.id}`);   
}

//destroy
function destroy(req, res){
    console.log(`Eliminazione del dolce ${req.params.id}`);   
}


module.exports = {index, show, store, update, modify, destroy};