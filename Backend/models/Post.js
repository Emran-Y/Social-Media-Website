const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    desc: {
        type: String,
        max: 500
    },
    image: {
        type: String
    },
    likes: {
        type: Array,
        default: []
    }
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
