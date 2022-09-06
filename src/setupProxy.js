// import { createProxyMiddleware } from 'http-proxy-middleware';

// export default function setupProxy(app) {
//   app.use(
//     createProxyMiddleware(['/api', '/otherApi'], {
//       target: 'http://localhost:5000',
//     })
//   );
// }
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    createProxyMiddleware(['/api/', , '/otherApi/'], {
      target: 'http://localhost:5000',
    })
  );
};
