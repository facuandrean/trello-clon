import express from "express";
import logger from "morgan";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(process.cwd(), 'public');

app.use(logger('dev'));
app.use(express.static(publicPath));

app.get("/", (req, res) => {
    console.log('hola mundo');
});

app.listen(port, () => {
    console.log(`Iniciando app desde http://localhost:${port}`);
});
