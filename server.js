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
  
  if (intentName == "SIMPLES") {
    
    var number = request.body.queryResult.parameters['number'];
    var pizza = request.body.queryResult.parameters['number'];
    
    
    
    } 
  
});



const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
