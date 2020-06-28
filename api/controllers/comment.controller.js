const Comment = require('../models/comment.model.js');
const log    = require('../log');
// Create and Save a new comment


exports.post = (req, res) => {
    // Validate request
    if (!req.body.commentId) {
        return res.status(400).send({
            message: "Comment content can not be empty"
        });
    }
 
    // Create a Comment
    const comment = new Comment({
        commentId: req.body.commentId,
        commentDetails: req.body.commentDetails,
        orderId :req.body.orderId,
        userId :req.body.userId
    });

    // Save comment in the database
    comment.save()
        .then(data => {
            res.send("comment posted successfully");
             
            log.info("comment posted successfully")
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the comments."
            });
        });
};

// Retrieve and return all Comments from the database.
exports.findAll = (req, res) => {
    Comment.aggregate([
        {
            $lookup:
            { 
                
                from: 'orderreplies',
                localField: 'orderId',
                foreignField: 'orderId',
                as: 'Replies'
            }
        },
        { $project: { "_id": 0, "__v": 0, "Replies": { "_id": 0,"__v": 0 } } }
         
  
    ],function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        res.end(JSON.stringify(result));
    });
};

 

 

