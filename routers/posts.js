// IMPORT //
import express from "express";
import { post } from "../data.js";

const router = express.Router();

// Index //
router.get("/", (req, res) => {
    res.json({
        data: post,
        count: post.length,
    });
});

// show //
router.get("/:id", (req, res) => {
    const postId = req.params.id;
    res.json({
        data: `mostra i dettagli dei post tramite Id ${postId}`,
    });
});

// store //
router.post("/", (req, res) => {
    res.json({
        data: "aggiungo un nuovo post",
    });
});

// update //
router.put("/", (req, res) => {
    const postId = req.params.id;
    res.json({
        data: `modifico un singolo elemento tramite Id ${postId}`,
    });
});

// destroy //
router.delete("/:id", (req, res) => {
    const postId = req.params.id;
    res.json({
        data: `Cancellazione del post 1 tramite Id ${postId}`,
    });
});


// esporto router //
export default router;