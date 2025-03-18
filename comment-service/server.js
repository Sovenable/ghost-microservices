const express = require('express');
const appComment = express();
const PORT_COMMENT = process.env.PORT || 3003;

appComment.use(express.json());

const comments = [
    { id: 1, postId: 1, content: "Great post!" },
    { id: 2, postId: 2, content: "Very informative." }
];

appComment.get('/comments', (req, res) => {
    res.json(comments);
});

appComment.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).json({ message: "Comment not found" });
    res.json(comment);
});

appComment.listen(PORT_COMMENT, () => {
    console.log(`Comment Service running on port ${PORT_COMMENT}`);
});
