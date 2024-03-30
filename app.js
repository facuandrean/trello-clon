import express from "express";
import path from "path";
import logger from "morgan";
import viewController from "./controllers/viewController.js";
import crypto from 'crypto';


const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const port = process.env.PORT || 3000;

app.use(logger('dev'));

app.set("/views", path.join(__dirname, "/views"));
app.set("view engine", "pug");

app.use(express.static("public", { 
    setHeaders: (res, path) => {
        if (path.endsWith(".css")) {
            res.setHeader("Content-Type", "text/css");
        }
    }
}));
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Configurar la CSP

// app.use((req, res, next) => {
//     res.setHeader('Content-Security-Policy', "style-src 'self' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://fonts.googleapis.com 'unsafe-inline'; script-src 'self' https://kit.fontawesome.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net");
//     next();
// });

app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', `style-src 'self' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://fonts.googleapis.com 'unsafe-inline'; script-src 'self' https://kit.fontawesome.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net`);
    next();
});

app.get("/", viewController.getViewMyBoards);
app.get("/boards-automatics", viewController.getViewBoardsAutomatics);
app.get("/calendar", viewController.getViewCalendar);

app.listen(port, () => {
    console.log(`Iniciando app desde http://localhost:${port}`);
});
