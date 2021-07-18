const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require ('mysql');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.post('/Dialogflow', function(request, response) {
var intentName = request.body.queryResult.intent.displayName;
  
  if (intentName == "bebida") {
    
    var valorPizza = 27.00;
    var valorBebida = 6.50;
    var txentrega = 5.00;
    
    var totalpedido = valorPizza + valorBebida + txentrega;
       
    
 response.json({ "fulfillmentText" : "o valor do pedido:" +totalpedido});
 } 
  
});



const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
