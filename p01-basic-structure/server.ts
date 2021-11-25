import express from 'express';
import cors from 'cors';
import routes from './src/routes/index';

const port = 3000;
const app = express();

app.use(cors());
app.use(routes);

app.listen(port, () => {
    console.log(`Aplicação online na porta ${port}`);
})