import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express';

const port = 3000;
const app = express();
app.use(cors());

app.get('', (request: Request, response: Response) => {
    response.send({ 'message': 'Hello World'});
});

app.listen(port, () => {
    console.log(`A aplicação está online na porta ${port}`);
});