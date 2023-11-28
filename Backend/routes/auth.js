const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const Joi = require('joi')


// Route for registering new user
router.post('/register',async (req,res) => {

    const {error,value} = userValidatorForRegistering(req.body)
    if(error){
        res.status(400).json({errorMessage:error.message})
    }else{

        // Checking for the uniquness of user data
        const existingUser = await User.findOne({
            $or: [{ email: value.email }, { username: value.username }],
          })
      
          if (existingUser) {
            const field = existingUser.email === value.email ? 'email' : 'username';
            res.status(400).json({errorMessage:`${field} is already in use.`})
          }

        try{
            // Hashing a password of the user
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(value.password,salt)
    
            // Creating a user object
            const newUser = {
                username:value.username,
                email:value.email,
                password:hashedPassword
            }
            // creating a user document and save it to the database
            const user = await new User(newUser)
            const userCreated = await user.save()
            res.status(200).json(userCreated)
    
        }catch(err){
            res.status(500).json(err)
        }
    }

})

//Route for logging 

router.post('/login',async (req,res) => {

    const {error,value} = userValidatorForLoggingIn(req.body)
    if(error){
        res.status(400).json({errorMessage:error.message})
    }else{ 
        try{
            const user = await User.findOne({email:value.email})
            !user && res.status(404).json({errorMessage:'Incorrect Email or Password'})
    
            const validPassword = await bcrypt.compare(value.password,user.password)
            !validPassword && res.status(404).json({errorMessage:'Incorrect Email or Password'})
    
            res.status(200).send(user)
        }catch(err){
            res.status(500).json(err)
        }
    }

})


// Validation functions

const userValidatorForLoggingIn = user => {
    const validationSchema = Joi.object({
        password:Joi.string().min(8).required(),
        email:Joi.string().email().max(50).required()
    })

    return validationSchema.validate(user)
}
const userValidatorForRegistering = user => {
    const validationSchema = Joi.object({
        username:Joi.string().min(3).max(20).required(),
        password:Joi.string().min(8).required(),
        email:Joi.string().email().max(50).required()
    })

    return validationSchema.validate(user)
}

module.exports = router