import express from 'express';
const PORT = 9090;
const app = express();
// app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});
export default app;
