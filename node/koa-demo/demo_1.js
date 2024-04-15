const http = require('http');  // commonJS

const server = http.createServer((req, res) => {  // req前端的请求  res后端的响应
  // 业务逻辑
  console.log(req.url);
})

server.listen(3000, () => {
  console.log('listening on port 3000');
})