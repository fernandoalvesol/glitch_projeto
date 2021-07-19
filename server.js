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
    
    var data = new Date();
    var ano = data.getFullYear();
    var mes = (data.getMonth()+1);
    var pedido = Math.floor(Math.random() * 6556);
    
    //PIZZA CALABRESA
    if( pizza == 1 && bebida == 1){ 
      
      var npizza = "CALABRESA";
      var nbebida = "REFRIGERANTE 1 LITRO";
      
      var vpizza = 27.00;
      var vbebida = 6.50;
      var txentrega = 5.00;
      var total = vpizza + vbebida + txentrega; 
      
     response.json({"fulfillmentText" : +
                     "===== CONFIRA SEU PEDIDO =======: "+
                     "PEDIDO: "+ano+""+mes+""+pedido+"\n"+
                     "NOME: "+name+"\n"+
                     "ENDEREÇO: "+endereco+"\n"+
                     "REFERENCIA: "+referencia+"\n"+
                     "PIZZA: "+npizza+"\n"+
                     "BEBIDA: "+nbebida+"\n"+
                     "TAXA DE ENTREGA: R$"+txentrega+"\n"+
                     "VALOR DO PEDIDO: R$" +total+"\n"+
                     "TROCO: "+troco+"\n"+ 
                     "Para confirmar digite FECHAR"
                    
                    });      
      
    }
    else if( pizza == 1 && bebida == 2){

      var npizza = "CALABRESA";
      var nbebida = "REFRIGERANTE 2 LITRO";
      
      var vpizza = 27.00;
      var vbebida = 9.50;
      var txentrega = 5.00;
      var total = vpizza + vbebida + txentrega;
      
      response.json({"fulfillmentText" : +
                     "===== CONFIRA SEU PEDIDO =======: "+
                     "PEDIDO: "+ano+""+mes+""+pedido+"\n"+
                     "NOME: "+name+"\n"+
                     "ENDEREÇO: "+endereco+"\n"+
                     "REFERENCIA: "+referencia+"\n"+
                     "PIZZA: "+npizza+"\n"+
                     "BEBIDA: "+nbebida+"\n"+
                     "TAXA DE ENTREGA: R$"+txentrega+"\n"+
                     "VALOR DO PEDIDO: R$" +total+"\n"+
                     "TROCO: "+troco+"\n"+ 
                     "Para confirmar digite FECHAR"
                    });
      
    }
    if( pizza == 1 && bebida == 7){
      
      var npizza = "CALABRESA";
      var nbebida = "SEM BEBIDA";
      
      var vpizza = 27.00;
      var txentrega = 5.00;
      var total = vpizza + txentrega;
      
     response.json({"fulfillmentText" : +
                     "===== CONFIRA SEU PEDIDO =======: "+
                     "PEDIDO: "+ano+""+mes+""+pedido+"\n"+
                     "NOME: "+name+"\n"+
                     "ENDEREÇO: "+endereco+"\n"+
                     "REFERENCIA: "+referencia+"\n"+
                     "PIZZA: "+npizza+"\n"+
                     "BEBIDA: "+nbebida+"\n"+
                    "TAXA DE ENTREGA: R$"+txentrega+"\n"+
                     "VALOR DO PEDIDO: R$" +total+"\n"+
                     "TROCO: "+troco+"\n"+ 
                     "Para confirmar digite FECHAR"
                    
                    });  
      
    }   
    
    else if( pizza == 1 && bebida == 3){

      var npizza = "CALABRESA";
      var nbebida = "REFRIGERANTE LATA350ML";
      
      var vpizza = 27.00;
      var vbebida = 4.50;
      var txentrega = 5.00;
      var total = vpizza + vbebida + txentrega;
      
      response.json({"fulfillmentText" : +
                     
                    "===== CONFIRA SEU PEDIDO =======: "+
                      "PEDIDO: "+ano+""+mes+""+pedido+"\n"+
                     "NOME: "+name+"\n"+
                     "ENDEREÇO: "+endereco+"\n"+
                     "REFERENCIA: "+referencia+"\n"+
                     "PIZZA: "+npizza+"\n"+
                     "BEBIDA: "+nbebida+"\n"+
                     "TAXA DE ENTREGA: R$"+txentrega+"\n"+
                     "VALOR DO PEDIDO: R$" +total+"\n"+
                     "TROCO: "+troco+"\n"+ 
                     "Para confirmar digite FECHAR"
                    });
      
      
       
    }
    if( pizza == 1 && bebida == 7){
      
      var npizza = "CALABRESA";
      var nbebida = "SEM BEBIDA";
      
      var vpizza = 27.00;
      var txentrega = 5.00;
      var total = vpizza + txentrega;
      
     response.json({"fulfillmentText" : +
                     "===== CONFIRA SEU PEDIDO =======: "+
                     "PEDIDO: "+ano+""+mes+""+pedido+"\n"+
                     "NOME: "+name+"\n"+
                     "ENDEREÇO: "+endereco+"\n"+
                     "REFERENCIA: "+referencia+"\n"+
                     "PIZZA: "+npizza+"\n"+
                     "BEBIDA: "+nbebida+"\n"+
                     "TAXA DE ENTREGA: R$"+txentrega+"\n"+
                     "VALOR DO PEDIDO: R$" +total+"\n"+
                     "TROCO: "+troco+"\n"+ 
                     "Para confirmar digite FECHAR"
                    
                    });  
      
    }
    
    //PIZZA MODA DA CASA
    else if( pizza == 2 && bebida == 1){

      var npizza = "MODA DA CASA";
      var nbebida = "REFRIGERANTE 1 LITRO";
      
      var vpizza = 27.00;
      var vbebida = 6.50;
      var txentrega = 5.00;
      var total = vpizza + vbebida + txentrega;
      
      response.json({"fulfillmentText" : +
                    "===== CONFIRA SEU PEDIDO =======: "+
                      "PEDIDO: "+ano+""+mes+""+pedido+"\n"+
                     "NOME: "+name+"\n"+
                     "ENDEREÇO: "+endereco+"\n"+
                     "REFERENCIA: "+referencia+"\n"+
                     "PIZZA: "+npizza+"\n"+
                     "BEBIDA: "+nbebida+"\n"+
                     "TAXA DE ENTREGA: R$"+txentrega+"\n"+
                     "VALOR DO PEDIDO: R$" +total+"\n"+
                     "TROCO: "+troco+"\n"+ 
                     "Para confirmar digite FECHAR"
                    });
    }else if( pizza == 2 && bebida == 2){

      var npizza = "MODA DA CASA";
      var nbebida = "REFRIGERANTE 2 LITRO";
      
      var vpizza = 27.00;
      var vbebida = 9.50;
      var txentrega = 5.00;
      var total = vpizza + vbebida + txentrega;
      
      response.json({"fulfillmentText" : +
                    "===== CONFIRA SEU PEDIDO =======: "+
                      "PEDIDO: "+ano+""+mes+""+pedido+"\n"+
                     "NOME: "+name+"\n"+
                     "ENDEREÇO: "+endereco+"\n"+
                     "REFERENCIA: "+referencia+"\n"+
                     "PIZZA: "+npizza+"\n"+
                     "BEBIDA: "+nbebida+"\n"+
                     "TAXA DE ENTREGA: R$"+txentrega+"\n"+
                     "VALOR DO PEDIDO: R$" +total+"\n"+
                     "TROCO: "+troco+"\n"+ 
                     "Para confirmar digite FECHAR"
                    });
    }else if( pizza == 2 && bebida == 3){

      var npizza = "MODA DA CASA";
      var nbebida = "REFRIGERANTE 350ML LATA";
      
      var vpizza = 27.00;
      var vbebida = 4.50;
      var txentrega = 5.00;
      var total = vpizza + vbebida + txentrega;
      
      response.json({"fulfillmentText" : +
                    "===== CONFIRA SEU PEDIDO =======: "+
                      "PEDIDO: "+ano+""+mes+""+pedido+"\n"+
                     "NOME: "+name+"\n"+
                     "ENDEREÇO: "+endereco+"\n"+
                     "REFERENCIA: "+referencia+"\n"+
                     "PIZZA: "+npizza+"\n"+
                     "BEBIDA: "+nbebida+"\n"+
                     "TAXA DE ENTREGA: R$"+txentrega+"\n"+
                     "VALOR DO PEDIDO: R$" +total+"\n"+
                     "TROCO: "+troco+"\n"+ 
                     "Para confirmar digite FECHAR"
                    });
    }
    if( pizza == 2 && bebida == 7){
      
      var npizza = ",MODA DA CASA";
      var nbebida = "SEM BEBIDA";
      
      var vpizza = 27.00;
      var txentrega = 5.00;
      var total = vpizza + txentrega;
      
     response.json({"fulfillmentText" : +
                    "===== CONFIRA SEU PEDIDO =======: "+
                     "PEDIDO: "+ano+""+mes+""+pedido+"\n"+
                     "NOME: "+name+"\n"+
                     "ENDEREÇO: "+endereco+"\n"+
                     "REFERENCIA: "+referencia+"\n"+
                     "PIZZA: "+npizza+"\n"+
                     "BEBIDA: "+nbebida+"\n"+
                     "TAXA DE ENTREGA: R$"+txentrega+"\n"+
                     "VALOR DO PEDIDO: R$" +total+"\n"+
                     "TROCO: "+troco+"\n"+ 
                     "Para confirmar digite FECHAR"
                    
                    });  
      
    }
      
    //PIZZA FRANGO
    else if( pizza == 3 && bebida == 1){

      var npizza = "PIZZA DE FRANGO";
      var nbebida = "REFRIGERANTE 1 LITRO";
      
      var vpizza = 27.00;
      var vbebida = 6.50;
      var txentrega = 5.00;
      var total = vpizza + vbebida + txentrega;
      
      response.json({"fulfillmentText" : +
                   "===== CONFIRA SEU PEDIDO =======: "+
                      "PEDIDO: "+ano+""+mes+""+pedido+"\n"+
                     "NOME: "+name+"\n"+
                     "ENDEREÇO: "+endereco+"\n"+
                     "REFERENCIA: "+referencia+"\n"+
                     "PIZZA: "+npizza+"\n"+
                     "BEBIDA: "+nbebida+"\n"+
                     "TAXA DE ENTREGA: R$"+txentrega+"\n"+
                     "VALOR DO PEDIDO: R$" +total+"\n"+
                     "TROCO: "+troco+"\n"+ 
                     "Para confirmar digite FECHAR"
                    });
      
    }else if( pizza == 3 && bebida == 2){

      var npizza = "PIZZA DE FRANGO";
      var nbebida = "REFRIGERANTE 2 LITRO";
      
      var vpizza = 27.00;
      var vbebida = 6.50;
      var txentrega = 5.00;
      var total = vpizza + vbebida + txentrega;
      
      response.json({"fulfillmentText" : +
                    "===== CONFIRA SEU PEDIDO =======: "+
                      "PEDIDO: "+ano+""+mes+""+pedido+"\n"+
                     "NOME: "+name+"\n"+
                     "ENDEREÇO: "+endereco+"\n"+
                     "REFERENCIA: "+referencia+"\n"+
                     "PIZZA: "+npizza+"\n"+
                     "BEBIDA: "+nbebida+"\n"+
                     "TAXA DE ENTREGA: R$"+txentrega+"\n"+
                     "VALOR DO PEDIDO: R$" +total+"\n"+
                     "TROCO: "+troco+"\n"+ 
                     "Para confirmar digite FECHAR"
                    });
    }
    else if( pizza == 3 && bebida == 3){

      var npizza = "PIZZA DE FRANGO";
      var nbebida = "REFRIGERANTE 350ML LATA";
      
      var vpizza = 27.00;
      var vbebida = 4.50;
      var txentrega = 5.00;
      var total = vpizza + vbebida + txentrega;
      
      response.json({"fulfillmentText" : +
                    "===== CONFIRA SEU PEDIDO =======: "+
                      "PEDIDO: "+ano+""+mes+""+pedido+"\n"+
                     "NOME: "+name+"\n"+
                     "ENDEREÇO: "+endereco+"\n"+
                     "REFERENCIA: "+referencia+"\n"+
                     "PIZZA: "+npizza+"\n"+
                     "BEBIDA: "+nbebida+"\n"+
                     "TAXA DE ENTREGA: R$"+txentrega+"\n"+
                     "VALOR DO PEDIDO: R$" +total+"\n"+
                     "TROCO: "+troco+"\n"+ 
                     "Para confirmar digite FECHAR"
                    });
    }
    if( pizza == 3 && bebida == 7){
      
      var npizza = ",PIZZA DE FRANGO";
      var nbebida = "SEM BEBIDA";
      
      var vpizza = 27.00;
      var txentrega = 5.00;
      var total = vpizza + txentrega;
      
     response.json({"fulfillmentText" : +
                     "===== CONFIRA SEU PEDIDO =======: "+
                     "PEDIDO: "+ano+""+mes+""+pedido+"\n"+
                     "NOME: "+name+"\n"+
                     "ENDEREÇO: "+endereco+"\n"+
                     "REFERENCIA: "+referencia+"\n"+
                     "PIZZA: "+npizza+"\n"+
                     "BEBIDA: "+nbebida+"\n"+
                     "TAXA DE ENTREGA: R$"+txentrega+"\n"+
                     "VALOR DO PEDIDO: R$" +total+"\n"+
                     "TROCO: "+troco+"\n"+ 
                     "Para confirmar digite FECHAR"
                    });  
      
    }
    
    } 
  
});



const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
