const express = require('express');
const appPost = express();
const PORT_POST = process.env.PORT || 3002;

appPost.use(express.json());

// Dummy post data
const posts = [
    { id: 1, title: "First Post", content: "This is the first post", userId: 1 },
    { id: 2, title: "Second Post", content: "This is the second post", userId: 2 }
];

appPost.get('/posts', (req, res) => {
    res.json(posts);
});

appPost.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
});

appPost.listen(PORT_POST, () => {
    console.log(`Post Service running on port ${PORT_POST}`);
});
