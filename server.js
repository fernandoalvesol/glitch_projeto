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
    
    var bebida = request.body.queryResult.parameters['bebida'];
    var pizza = request.body.queryResult.parameters['pizza'];
    var name = request.body.queryResult.parameters['name'];
    var endereco = request.body.queryResult.parameters['endereco'];
    var referencia = request.body.queryResult.parameters['referencia'];
    var troco = request.body.queryResult.parameters['troco'];
    
    //PIZZA CALABRESA
    if( pizza == 1 && bebida == 1 ){
      
      var npizza = "CALABRESA";
      var nbebida = "REFRIGERANTE 1 LITRO";
      
      var vpizza = 27.00;
      var vbebida = 6.50;
      var txentrega = 5.00;
      var total = vpizza + vbebida + txentrega;
      
     response.json({"fulfillmentText" : +
                     "===== CONFIRA SEU PEDIDO =======: "+
                     "NOME: "+name+"\n"+
                     "ENDEREÇO: "+endereco+"\n"+
                     "REFERENCIA: "+referencia+"\n"+
                     "PIZZA: "+npizza+"\n"+
                     "BEBIDA: "+nbebida+"\n"+
                     "VALOR DO PEDIDO: "+total+"\n"+
                     "TROCO: "+troco+"\n"+ 
                     "Para confirmar digite FECHAR"
                    
                    });      
      
    }else if( pizza == 1 && bebida == 2){

      var npizza = "CALABRESA";
      var nbebida = "REFRIGERANTE 2 LITRO";
      
      var vpizza = 27.00;
      var vbebida = 9.50;
      var txentrega = 5.00;
      var total = vpizza + vbebida + txentrega;
      
      response.json({"fulfillmentText" : +
                     "===== CONFIRA SEU PEDIDO =======: "+
                     "NOME: "+name+"\n"+
                     "ENDEREÇO: "+endereco+"\n"+
                     "REFERENCIA: "+referencia+"\n"+
                     "PIZZA: "+npizza+"\n"+
                     "BEBIDA: "+nbebida+"\n"+
                     "VALOR DO PEDIDO: "+total+"\n"+
                     "TROCO: "+troco+"\n"+ 
                     "Para confirmar digite FECHAR"
                    });
      
    }else if( pizza == 1 && bebida == 3){

      var npizza = "CALABRESA";
      var nbebida = "REFRIGERANTE LATA350ML";
      
      var vpizza = 27.00;
      var vbebida = 4.50;
      var txentrega = 5.00;
      var total = vpizza + vbebida + txentrega;
      
      response.json({"fulfillmentText" : +
                    "===== CONFIRA SEU PEDIDO =======: "+
                     "NOME: "+name+"\n"+
                     "ENDEREÇO: "+endereco+"\n"+
                     "REFERENCIA: "+referencia+"\n"+
                     "PIZZA: "+npizza+"\n"+
                     "BEBIDA: "+nbebida+"\n"+
                     "VALOR DO PEDIDO: "+total+"\n"+
                     "TROCO: "+troco+"\n"+ 
                     "Para confirmar digite FECHAR"
                    });
    }
    
    
    
    } 
  
});



const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
