const mongoose = require('mongoose');

const ReplyCommentSchema = new mongoose.Schema({
    replyId: Number,
    commentId: String,
    orderId:Number,
    Reply: String,
    ReplyBy: Number
});
 
module.exports = mongoose.model('orderreplies', ReplyCommentSchema);