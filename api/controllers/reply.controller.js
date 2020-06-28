const Reply = require('../models/reply.model');
const log    = require('../log');
// Create and Save a new Reply

exports.post = (req, res) => {
    // Validate request
    if (!req.body.commentId) {
        return res.status(400).send({
            message: "Reply content can not be empty"
        });
    }
 
    // Create a Reply
    const reply = new Reply({
        replyId: req.body.replyId,
        commentId: req.body.commentId,
        orderId :req.body.orderId,
        Reply :req.body.Reply,
        ReplyBy :req.body.ReplyBy
    });

    // Save Reply in the database
    reply.save()
        .then(data => {
            res.send("reply posted successfully");
            log.info("reply posted successfully")
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the reply."
            });
        });
};

