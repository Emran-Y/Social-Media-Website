const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const _ = require('lodash')

// update a user 
router.put('/:id',async(req,res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){

        

        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password,salt)
            }catch(err){
                return res.status(500).json({errorMessage:"It is us, not you"})
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id,{$set:req.body})
            res.status(200).send('The Account has been updated')
        }catch(err){
            return res.status(500).json({errorMessage:"It is us, not you"})
        }

    }else{
        res.status(403).json({errorMessage:"You can update your account only"})
    }
})
// get a user
router.get('/', async (req, res) => {
     
    const userId = req.query.userId
    const username = req.query.username

    console.log(username)

    try {
            const user = userId ? await User.findById(userId) : await User.findOne({username:username})

            if (!user) {
                return res.status(400).json('User does not exist');
            }

            // Use _.omit to exclude specific keys from the response
            const sanitizedUser = _.omit(user.toObject(), ['updatedAt', 'password']);
            
            res.status(200).json(sanitizedUser);
        } catch (err) {
            res.status(500).json(err);
        }
})


// delete a user
router.delete('/:id',async(req,res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json('The account has been deleted')

        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json('You can delete only your account')
    }
})
// follow a user 
router.put('/:id/follow',async (req,res) => {
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push:{followers:req.body.userId}})
                await currentUser.updateOne({$push:{following:req.params.id}})
                res.status(200).json({message:'You have followed'})
            }else{
                res.status(403).json({errorMessage:'You already followed this user'})
            }
        }catch{
            res.status(500).json({errorMessage:"It is us not you this time."})
        }
    }
    else{res.status(403).json({errorMessage:"You cant follow your self"})}
})
// unfollow a user

router.put('/:id/unfollow',async (req,res) => {
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull:{followers:req.body.userId}})
                await currentUser.updateOne({$pull:{following:req.params.id}})
                res.status(200).json({message:'You have unfollowed'})
            }else{
                res.status(403).json({errorMessage:'You already unfollowed this user'})
            }
        }catch{
            res.status(500).json({errorMessage:"It is us not you this time."})
        }
    }
    else{res.status(403).json({errorMessage:"You cant unfollow your self"})}
})

module.exports = router