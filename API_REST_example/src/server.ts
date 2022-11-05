import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect("mongodb://localhost/apitest")

app.use(express.json())
app.get('/', (req, res) => {
    res.send("Hello");
});

app.listen(3000, () => {
    console.log("Server is listening");
});