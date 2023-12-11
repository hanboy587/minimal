const createProxyMiddleware = require("http-proxy-middleware");
module.exports = app => {
  app.use(
    createProxyMiddleware(
      "/payroll",
      {
        target: "https://kjh.rba.kr:443",
        changeOrigin: true,
        // ws: true,
        // router: {
        //   "/socket.io": "ws://{서버 엔드포인트 주소}"
        // }
      }
    )
  ),
  app.use(
    createProxyMiddleware(
      ["/index", "/ui"],
      {
        target: "https://localhost:3000",
        changeOrigin: true,
        // ws: true,
        // router: {
        //   "/socket.io": "ws://{서버 엔드포인트 주소}"
        // }
      }
    )
  )
}