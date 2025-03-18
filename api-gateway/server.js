const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/users', createProxyMiddleware({ target: 'http://localhost:4001', changeOrigin: true }));
app.use('/posts', createProxyMiddleware({ target: 'http://localhost:4002', changeOrigin: true }));
app.use('/comments', createProxyMiddleware({ target: 'http://localhost:4003', changeOrigin: true }));

app.listen(4000, () => {
    console.log('API Gateway running on port 4000');
});
