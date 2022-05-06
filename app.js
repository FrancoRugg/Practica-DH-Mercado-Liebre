const express = require("express");
const app = express();

const path = require("path");

app.listen(3001, ()=>{
    console.log("Servidor funcionando");
})

app.use(express.static(path.resolve(__dirname, "./public")));

app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
})