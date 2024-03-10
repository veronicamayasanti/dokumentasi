import express from "express";
import request from "supertest";

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World")
});

