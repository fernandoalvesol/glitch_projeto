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
  if(intentName == "Contratar"){ 
    
    console.log('incluir')
    
    var NomeContato = request.body.queryResult.parameters['nome']; 
    var TelefoneContato = request.body.queryResult.parameters['telefone'];
    var CpfContato = request.body.queryResult.parameters['cpf'];
    var RgContato = request.body.queryResult.parameters['rg']
    var ProtocoloContato = request.body.queryResult.parameters['protocolo']
    
    var query = 'insert into clientes values ("'+NomeContato+'","'
    +TelefoneContato+'", "'+CpfContato+'", "'+RgContato+'", "'+ProtocoloContato+'")'; 
    
    connection.query(query, function (error, results, fields) { 
      
      if (error) throw error; connection.end(); 
              response.json({"fulfillmentText" :"Contato Adicionado com Sucesso!" 
}) 
    }); 
  
  } 
  
  //Consultar Clientes
  
  if(intentName == "chamado"){ 
    
    console.log('Pesquisar Contato'); 
    
    var CpfContato = request.body.queryResult.parameters['cpf'];
    //validando o tamanho do cpf
    if(CpfContato.length == 11){
      
    var query = 'select * from clientes where cpf = "'+CpfContato+'"';  
         
    connection.query(query, function (error, results, fields) { 
      
      if (error) throw error; connection.end(); 
      
                
          var contato = ''; contato = 'Nome: '+results[0].nome+
                               "\n |"+'Telefone: '+results[0].telefone+
                                "\n |"+'Rg: '+results[0].rg; 
      
          response.json({"fulfillmentText": contato }) 
        
    }); 
      
      
    }
      
    else if(CpfContato.length != 11){
      
      var cpfnow = 'CPF INVALIDO';
      
      response.json({"fulfillmentText": cpfnow }) 
    }
   
  }
  
  //Consultar Dia disponível
  
  
  //Atualizar Horário
  else if(intentName == 'AlterarStatus'){ 
      console.log('Atualizar Status') 
        var Dia = request.body.queryResult.parameters['dia']; 
        var query = 'select * from agenda where dia = "'+Dia+'"'; 
    
    connection.query(query, function (error, results, fields) { 
      
      if (error) throw error; 
        connection.end(); 
      
        response.json({"fulfillmentText":                        
                       "Informações: "+"\n"+ 
                       "Dia: "+results[0].dia+
                 "\n"+ "Status: "+results[0].status+
                 "\n"+ "Deseja Reservar Horário?" }) 
    });
  
  }
  
  else if(intentName == 'AlterarStatus - yes'){ 
    console.log ("Atualizar Status - yes"); 
      var Dia = request.body.queryResult.outputContexts[0].parameters['dia']; 
      //var Status = 'inativo';
      var query = 'update agenda set status = "inativo" where dia = "'+Dia+'"'; 
    
        connection.query(query, function (error, results, fields) { 
          if (error) throw error; 
          connection.end(); 
          
          response.json({"fulfillmentText":"Contato Alterado com Sucesso!" }) 
        
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
  
  //Atualizar contatos
  else if(intentName == 'AlterarClientes'){ 
      console.log('Atualizar Contato') 
        var CpfContato = request.body.queryResult.parameters['cpf']; 
        var query = 'select * from clientes where cpf = "'+CpfContato+'"'; 
    
    connection.query(query, function (error, results, fields) { 
      
      if (error) throw error; 
        connection.end(); 
      
        response.json({"fulfillmentText":                        
                       "Informações: "+"\n"+ 
                       "Nome: "+results[0].nome+
                 "\n"+ "Cpf: "+results[0].cpf+
                 "\n"+ "Deseja Alterar?" }) 
    });
  
  }
  
  else if(intentName == 'AlterarClientes - yes'){ 
    console.log ("Atualizar Clientes - yes"); 
      var CpfContato = request.body.queryResult.outputContexts[1].parameters['cpf']; 
      var NomeContato = request.body.queryResult.parameters['nome']; 
      var query = 'update clientes set nome = "'+NomeContato+'" where cpf = "'+CpfContato+'"'; 
    
        connection.query(query, function (error, results, fields) { 
          if (error) throw error; 
          connection.end(); 
          
          response.json({"fulfillmentText":"Contato Alterado com Sucesso!" }) 
        
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
