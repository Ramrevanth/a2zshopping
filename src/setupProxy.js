import { createProxyMiddleware } from 'http-proxy-middleware';

export default function setupProxy(app) {
  app.use(
    createProxyMiddleware(['/api', , '/otherApi'], {
      target: 'http://localhost:5000',
    })
  );
}
