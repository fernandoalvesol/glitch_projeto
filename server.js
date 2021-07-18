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
    
    var number = request.body.queryResult.parameters['number'];
    
    if(number == 1){
      
      var Pizza = "calabresa";
      var bebida = "coca coal 1 litro";
      var taxa = "5,00";

      var valorPizza = 27.00;
      var valorBebida = 6.50;
      var txentrega = 5.00;
    
      var totalpedido = valorPizza + valorBebida + txentrega;
       
      response.json({ "fulfillmentText" : 
                "====== CONFIRE SEU PEDIDO====="+
                "PIZZA: "+Pizza+"/n"+
                "BEBIDA:"+bebida+"/n"+
                "TAXA DE ENTREGA: "+taxa+"/n"+
                "TOTAL DO PEDIDO:" +totalpedido+"/n"+
                
                "Para confirmar Digite FECHAR"
               
               });
    }else if( number == 2){
      
      var Pizza = "calabresa";
      var bebida = "coca coal 2 litro";
      var taxa = "5,00";

      var valorPizza = 27.00;
      var valorBebida = 9.50;
      var txentrega = 5.00;
    
      var totalpedido = valorPizza + valorBebida + txentrega;
       
      response.json({ "fulfillmentText" : 
                "====== CONFIRE SEU PEDIDO====="+
                "PIZZA: "+Pizza+"/n"+
                "BEBIDA:"+bebida+"/n"+
                "TAXA DE ENTREGA: "+taxa+"/n"+
                "TOTAL DO PEDIDO:" +totalpedido+"/n"+
                
                "Para confirmar Digite FECHAR"
               
               });
    }else if( number == 3){
      
      var Pizza = "calabresa";
      var bebida = "coca cola 350ml";
      var taxa = "5,00";

      var valorPizza = 27.00;
      var valorBebida = 4.50;
      var txentrega = 5.00;
    
      var totalpedido = valorPizza + valorBebida + txentrega;
       
      response.json({ "fulfillmentText" : 
                "====== CONFIRE SEU PEDIDO====="+
                "PIZZA: "+Pizza+"/n"+
                "BEBIDA:"+bebida+"/n"+
                "TAXA DE ENTREGA: "+taxa+"/n"+
                "TOTAL DO PEDIDO:" +totalpedido+"/n"+
                
                "Para confirmar Digite FECHAR"
               
               });
        
 }else if( number == 4){
      
      var Pizza = "calabresa";
      var bebida = "Guaraná 2 litros";
      var taxa = "5,00";

      var valorPizza = 27.00;
      var valorBebida = 9.50;
      var txentrega = 5.00;
    
      var totalpedido = valorPizza + valorBebida + txentrega;
       
      response.json({ "fulfillmentText" : 
                "====== CONFIRE SEU PEDIDO====="+
                "PIZZA: "+Pizza+"/n"+
                "BEBIDA:"+bebida+"/n"+
                "TAXA DE ENTREGA: "+taxa+"/n"+
                "TOTAL DO PEDIDO:" +totalpedido+"/n"+
                
                "Para confirmar Digite FECHAR"
               
               });
        
 }else if( number == 5){
      
      var Pizza = "calabresa";
      var bebida = "Guaraná 1 litro";
      var taxa = "5,00";

      var valorPizza = 27.00;
      var valorBebida = 6.50;
      var txentrega = 5.00;
    
      var totalpedido = valorPizza + valorBebida + txentrega;
       
      response.json({ "fulfillmentText" : 
                "====== CONFIRE SEU PEDIDO====="+
                "PIZZA: "+Pizza+"/n"+
                "BEBIDA:"+bebida+"/n"+
                "TAXA DE ENTREGA: "+taxa+"/n"+
                "TOTAL DO PEDIDO:" +totalpedido+"/n"+
                
                "Para confirmar Digite FECHAR"
               
               });
        
 }else if( number == 6){
      
      var Pizza = "calabresa";
      var bebida = "Guaraná lata 350ml";
      var taxa = "5,00";

      var valorPizza = 27.00;
      var valorBebida = 4.50;
      var txentrega = 5.00;
    
      var totalpedido = valorPizza + valorBebida + txentrega;
       
      response.json({ "fulfillmentText" : 
                "====== CONFIRE SEU PEDIDO====="+
                "PIZZA: "+Pizza+"/n"+
                "BEBIDA:"+bebida+"/n"+
                "TAXA DE ENTREGA: "+taxa+"/n"+
                "TOTAL DO PEDIDO:" +totalpedido+"/n"+
                
                "Para confirmar Digite FECHAR"
               
               });
        
 }
  }
  
});



const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
