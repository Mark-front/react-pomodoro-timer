import express from 'express';
import ReactDom from 'react-dom/server';
import { App } from '../AppContainer';
import { indexTemplate } from './indexTemplate';

const app = express();
const PORT = process.env.PORT ||4002;

app.use('/static', express.static('./dist/client'))

app.get('*', (req, res) => {
  res.send(
    indexTemplate(ReactDom.renderToString(App())),
  );
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});