const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Dummy user data
const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

// Endpoint untuk mendapatkan semua pengguna
app.get('/users', (req, res) => {
    res.json(users);
});

// Endpoint untuk mendapatkan user berdasarkan ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
});

app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});
