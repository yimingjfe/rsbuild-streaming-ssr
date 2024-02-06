import express from 'express';
import path from 'path';

const createRequestHandler = async() => {
  const { handleRequest } = await import(path.resolve(__dirname, '../dist/server'))
  return (req, res) => handleRequest(req, res);
}

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.static('dist', {
  index: false
}));

app.get('/', (req, res, next) => {
  createRequestHandler().then(handler => handler(req, res)).catch(next);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});