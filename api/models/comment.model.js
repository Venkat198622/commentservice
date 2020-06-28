const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    commentId: Number,
    orderId:Number,
    comments: String,
    commentBy: Number
});

 
module.exports = mongoose.model('ordercomments', CommentSchema);
