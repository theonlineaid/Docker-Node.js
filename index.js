import express from "express";
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Devops');
})

const port = process.env.PORT || 9000;

app.listen(9000, () => {
    console.log('Server is running on port ' + port);
})