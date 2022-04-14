import express from 'express';
import ReactDom from 'react-dom/server';
import { App } from '../AppContainer';
import { indexTemplate } from './indexTemplate';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/static', express.static('./dist/client'))

app.get('*', (req, res) => {
  res.send(
    indexTemplate(ReactDom.renderToString(App())),
  );
});

app.listen(3000, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});