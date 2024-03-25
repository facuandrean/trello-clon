import express from "express";
import path from "path";
import logger from "morgan";
import viewController from "./controllers/viewController.js";

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(process.cwd(), 'public');

app.use(logger('dev'));

app.set("/views", path.join(process.cwd(), "/views"));
app.set("view engine", "pug");

app.use(express.static(publicPath));

// app.use(express.static("public", { 
//     setHeaders: (res, path) => {
//         if (path.endsWith(".css")) {
//             res.setHeader("Content-Type", "text/css");
//         }
//     }
// }));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "script-src 'self' https://kit.fontawesome.com");
    next();
});

app.get("/", viewController.getViewMyBoards);

app.listen(port, () => {
    console.log(`Iniciando app desde http://localhost:${port}`);
});
