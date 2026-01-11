const express = require("express");
const fretch = require("node-fetch");

const app = express();
app.use(express.json());

app.post("/generate",async(req,res)=> {
 const response = await fetch(
 "https://api-inference.huggingface.co/models/runwayml/stable
{
method:"POST",
headers: {
 "Authorization":"Bearer {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}",

"Content-Type":"application/json"
},
body:JSON.stringify({ inputs:"cat"})
}
);

const buffer=await response.arrayBuffer();
res.set("Content-Type":"image/png");
res.send(Buffer.from(buffer));
});

app.listen(3000,()=>{
  console.log(起動中　http://localhost:3000");
});
