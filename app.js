const express = require('express');
const app = express();
let port = 3002;
const posts = require('./data/posts.js');

//router
const postsRouter = require('./routers/postsRouter.js');

app.use(express.static('public'));
app.use('/lists', postsRouter);

app.listen(port, () => {
    console.log(`Sono un server sulla porta ${port}`);
})