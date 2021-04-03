const express = require("express");
const app = express();
const bodyParser = require("body-parser"); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));


const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];


app.use(express.static("public"));

app.post("/Dialogflow", function(request, response) { 
  var intentName = request.body.queryResult.intent.displayName; 
  
    if (intentName == "teste") { 
        response.json({ "fulfillmentText" : "Testando WebHook..."}); 
    
    } 

});

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});


app.get("/dreams", (request, response) => {
  
  response.json(dreams);
});



const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
