const express = require('express');
const appNotification = express();
const PORT_NOTIFICATION = process.env.PORT || 3004;

appNotification.use(express.json());

appNotification.post('/notify', (req, res) => {
    const { userId, message } = req.body;
    if (!userId || !message) return res.status(400).json({ message: "Invalid request" });
    res.json({ success: true, message: `Notification sent to user ${userId}: ${message}` });
});

appNotification.listen(PORT_NOTIFICATION, () => {
    console.log(`Notification Service running on port ${PORT_NOTIFICATION}`);
});
