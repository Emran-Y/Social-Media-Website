const { string } = require('joi')
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        unique:true,
        min:3,
        max:20,
        require:true
    },
    email:{
        type:String,
        unique:true,
        max:50,
        require:true
    },
    password:{
        type:String,
        min:8,
        require:true
    },
    profilePicture:{
        type:String,
        default:''
    },
    profilePicture:{
        type:String,
        default:''
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    desc:{
        type:String,
        max:50
    },
    city:{
        type:String,
        max:50
    },
    from:{
        type:String,
        max:50
    },
    relationship:{
        type:Number,
        enum:[1,2,3]


    }
},
    {timestamps:true}
)



module.exports = mongoose.model('User',userSchema)