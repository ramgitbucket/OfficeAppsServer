import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index';
import ConnectMySQL from './database/config';
const app = express();
const port = 3001;

/* app.get('/', (req, res) => {
  res.send('Hello World!');
}); */
ConnectMySQL(false);
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});