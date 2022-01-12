const router = require('express').Router();
const Post = require('../model/post');

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
        //  post was saved to DB
        if (err) {
            res.status(400).send(err);
        //  post was not saved to DB
        } else {
            res.send(result);
        }
    });
});

// get the post by title route
router.get('/:post', async (req, res) => {
    console.log(req.params.post)
   
    // look for a post with an id - simple way
    const selectedPost = await Post.findOne({_id: req.params.post})
    // post was found
    if (selectedPost) {
        return res.status(200).send(selectedPost)
    // post was not found
    } else {
        res.status(400).send("Post does not exist");
    }

});


module.exports = router;