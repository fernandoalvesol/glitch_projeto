const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require ('mysql');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));


const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];


app.use(express.static("public"));

app.post("/Dialogflow", function(request, response) {
  
  var connection = mysql.createConnection({ 
    
    host: process.env.MYSQL_HOST, 
    user: process.env.MYSQL_USER, 
    password: process.env.MYSQL_PASS, 
    database: process.env.MYSQL_DB
  
  
  }); 
  
  connection.connect();
  
  var intentName = request.body.queryResult.intent.displayName; 
  
  
  if(intentName == 'AddClientes'){ 
    console.log('Adicionar Contato') 
    var NomeContato = request.body.queryResult.parameters['nome']; 
    var TelefoneContato = request.body.queryResult.parameters['telefone'];
    var CpfContato = request.body.queryResult.parameters['cpf'];
    
    var query = 'insert into clientes values ("'+NomeContato+'","'
    +TelefoneContato+'", "'+CpfContato+'")'; connection.query(query, 
      function (error, results, fields) { 
      if (error) throw error; connection.end(); 
              response.json({"fulfillmentText" :"Contato Adicionado com Sucesso!" 
}) 
    }); 
  
  }
  
  
  
    if (intentName == "teste") { 
        var soma = request.body.queryResult.parameters["number1"] + 
            request.body.queryResult.parameters["number2"]; 
      response.json({ "fulfillmentText" : 
                     
              "O Resultado da Soma é:" + "\n" + soma});
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
