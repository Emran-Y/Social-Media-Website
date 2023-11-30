const router = require('express').Router()
const Post = require('../models/Post')
const User = require('../models/User')



// create a post
router.post('/',async (req,res) => {
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    }catch{
        res.status(500).json({errorMessage:'it is us not you this time'})
    }
})

// update a post
router.put('/:id',async (req,res) => {
    try{
        const post = await Post.findById(req.params.id)
        if(post){
            if(post.user.toString() === req.body.userId){
                try{
                    await Post.updateOne({$set:req.body})
                    res.status(200).json('The post has been updated')
                }catch(err){
                    res.status(500).json(err)
                }
            }else{
                res.status(403).json('You can only update only your posts')
            }
        }else{
            res.status(400).json({errorMessage:"The Post You are looking for is does not exist"})
        }
    }catch(err){
        res.status(500).json(err)
    }
})

// delete a post
router.delete('/:id',async (req,res) => {
    try{
        const post = await Post.findById(req.params.id)
        if(post){
            if(post.user.toString() === req.body.userId){
                try{
                    await Post.deleteOne()
                    res.status(200).json('The post has been Deleted')
                }catch(err){
                    res.status(500).json(err)
                }
            }else{
                res.status(403).json('You can only delete only your posts')
            }
        }else{
            res.status(404).json({errorMessage:"The Post You are looking for is does not exist"})
        }
    }catch(err){
        res.status(500).json(err)
    }
})
// like a post
router.put('/:id/like',async(req,res) => {
    try{
        const post = await Post.findById(req.params.id)
        if(post){
            if(!post.likes.includes(req.body.userId)){
                await post.updateOne({$push:{likes:req.body.userId}})
                res.status(200).json('You successfully liked the post')
            }else{
                await post.updateOne({$pull:{likes:req.body.userId}})
                res.status(200).json('You succesfully unliked the post')
            }
        }else{
            res.status(400).json({errorMessage:"The Post You are looking for is does not exist"})
        }
    }catch(err){
        res.status(500).json(err)
    }
})
// get a post
router.get('/:id',async (req,res) => {
    try{
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }catch(err){
        res.status(500).json(err)
    }
})
// get timeline posts
router.get('/timeline/:userId', async (req,res) => {
    try{
        const currentUser = await User.findById(req.params.userId)
        const userPosts =  await Post.find({user:currentUser._id})
        const friendPosts = await Promise.all(
            currentUser.following.map(followingId => {
                return Post.find({user:followingId})
            })
        )
        res.status(200).json(userPosts.concat(...friendPosts))
    }catch(err){
        res.status(500).json(err)
    }
})



module.exports = router