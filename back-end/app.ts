import express, { Express, Request, Response, NextFunction } from 'express';
const PORT = 9090;

const app: Express = express();

// app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});



app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});

export default app;