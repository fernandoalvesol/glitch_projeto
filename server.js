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

//início da programação
app.post("/Dialogflow", function(request, response) {
  
  //variáveis de conexão com o banco
  var connection = mysql.createConnection({ 
    
    host: process.env.MYSQL_HOST, 
    user: process.env.MYSQL_USER, 
    password: process.env.MYSQL_PASS, 
    database: process.env.MYSQL_DB
  
  
  }); 
  
  connection.connect();
  
  //variável ira pegar o que digitado no display do dialogflow
  var intentName = request.body.queryResult.intent.displayName; 
  
  //cadastrar clientes
  if(intentName == "AdicionarClientes"){ 
    
    console.log('incluir')
    
    var NomeContato = request.body.queryResult.parameters['nome']; 
    var TelefoneContato = request.body.queryResult.parameters['telefone'];
    var CpfContato = request.body.queryResult.parameters['cpf'];
    var RgContato = request.body.queryResult.parameters['rg']
    
    var query = 'insert into clientes values ("'+NomeContato+'","'
    +TelefoneContato+'", "'+CpfContato+'", "'+RgContato+'")'; 
    
    connection.query(query, function (error, results, fields) { 
      
      if (error) throw error; connection.end(); 
              response.json({"fulfillmentText" :"Contato Adicionado com Sucesso!" 
}) 
    }); 
  
  }
  
    //cadastrar Dia da semana
  if(intentName == "AdicionarDia"){ 
    
    console.log('incluir')
    
    var Dia = request.body.queryResult.parameters['dia']; 
    var Status = request.body.queryResult.parameters['status']
    
    
    var query = 'insert into agenda values ("'+Dia+'","'
    +Status+'")'; 
    
    connection.query(query, function (error, results, fields) { 
      
      if (error) throw error; connection.end(); 
              response.json({"fulfillmentText" :"Dia da Semana Adicionado com Sucesso!" 
}) 
    }); 
  
  }
  
  
  //Consultar Clientes
  
  else if(intentName == "ConsultarClientes"){ 
    
    console.log('Pesquisar Contato'); 
    
    var query = 'select * from clientes where rg = "528986"';
    
    //var CpfContato = request.body.queryResult.parameters['cpf']; 
    
    //var query = 'select * from clientes where cpf = "'+CpfContato+'"'; 
    
    connection.query(query, function (error, results, fields) { 
      
      if (error) throw error; connection.end(); 
      
        var contato = ''; contato = 'Nome: '+results[0].nome+
                               "\n |"+'Telefone: '+results[0].telefone+
                                "\n |"+'Rg: '+results[0].rg; 
      
      response.json({"fulfillmentText": contato }) 
    }); 
  
  }
  
  //Consultar Dia disponível
  
  else if(intentName == "ConsultarDia"){ 
    
    console.log('Pesquisar por dia'); 
    
    var query = 'select * from agenda where status = "ativo"';
    
    //var CpfContato = request.body.queryResult.parameters['cpf']; 
    
    //var query = 'select * from clientes where cpf = "'+CpfContato+'"'; 
    
    connection.query(query, function (error, results, fields) { 
      
      if (error) throw error; connection.end(); 
                  
        
      var dia = ''; dia = 'Dia: '+results[0].dia+
                          "\n |"+'Dia: '+results[1].dia+
                          "\n |"+'Dia: '+results[2].dia+
                          "\n |"+'Dia: '+results[3].dia+
                          "\n |"+'Dia: '+results[4].dia;
                
      
      response.json({"fulfillmentText": dia }) 
    }); 
  
  }
  
  
  
  //Excluir contatos
  
  else if(intentName == 'ExcluirClientes'){ 
    
    console.log('Excluir Contato') 
    
    var CpfContato = request.body.queryResult.parameters['cpf']; 
    
    var query = 'delete from clientes where cpf = "'+CpfContato+'"'; 
    
    connection.query(query, function (error, results, fields) { 
      
      if (error) throw error; 
      
        connection.end(); 
        response.json({"fulfillmentText":"Contato Apagado com Sucesso!" }) 
    }); 
  
  }
  
  
  
  //função soma
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
