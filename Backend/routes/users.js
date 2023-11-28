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
router.get('/:id', async (req, res) => {
    if ('6565cf36a818f0467f377513' === req.params.id) {
        try {
            const user = await User.findById(req.params.id);

            if (!user) {
                return res.status(400).json('User does not exist');
            }

            // Use _.omit to exclude specific keys from the response
            const sanitizedUser = _.omit(user.toObject(), ['updatedAt', 'password']);
            
            res.status(200).json(sanitizedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('You are not authorized to access this user');
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
// unfollow a user

module.exports = router