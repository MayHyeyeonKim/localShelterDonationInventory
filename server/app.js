import Express from "express";

const app = Express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('Welcome to Mays Inventory!');
});

app.listen(port,() => {
    console.log(`server is running at http://localhost:${port}`);
});