// IMPORT //
import express from "express";
import postRouter from "./routers/posts.js"

// invoco funzione express //
const app = express();

// accesso alla pprta //
const port = 3000;

// accesso alla cartella delle immagini //
app.use(express.static("public"));

// rotta di prova //
app.get("/", (req, res) => {
    res.json({
        data: "rotta di prova",
    });
});

// server in ascolto //
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});