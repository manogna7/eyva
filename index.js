const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const http = require('http');
const data = require('./crawler');

app.use(cors());

app.post("/products", async(req,res) => {

})

http.createServer((req,res) => {
res.writeHead(200,{'Content-Type': 'application\json'});
res.write(JSON.stringify(data));
res.end();
}).listen(6000);