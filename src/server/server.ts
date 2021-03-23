import * as express from 'express';
import * as path from 'path';
import apiRouter from './routes/index';

const app = express();

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRouter);
app.use('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

const port = 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
