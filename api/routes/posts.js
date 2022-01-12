const router = require('express').Router();
const Post = require('../model/post')

// post the post route
router.post('/', async (req, res) => {
    let today = new Date();
    // create new post
    const post = new Post({
        title: req.body.title,
        name: req.body.name,
        date: today,
        body: req.body.body
    });
    console.log(today, post);
// save post to db
    const savedPost = await post.save((err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(result);
        }
    });




})

module.exports = router;