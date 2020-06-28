module.exports = (app) => {
    const comment = require('../controllers/index').comment;
    const reply = require('../controllers/index').reply;

    // Create a new Comment
    app.post('/api/postComments',  comment.post);

    // Create a new Reply
    app.post('/api/replyComments',  reply.post);

    // Retrieve all Comments
    app.get('/api/getAllComments',  comment.findAll);
}