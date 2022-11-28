const express = require('express');
var cors = require('cors'); 

class Server{

    constructor(){
        //manejaremos con "THIS" como propiedad de la clase
        this.app    = express();
        this.port   = process.env.PORT;
        //SOCKET IO
        this.server = require('http').createServer(this.app);
        this.io     = require('socket.io')(this.server);

        this.paths = { 

        } 
 

        // MIDDLEWARES - funcion que siempre se ejecutará cuando se levante el server
        this.middlewares();

        // RUTAS DE APP
        this.routes();
    }
  
    middlewares(){

        //CORS
        this.app.use(cors()); 
  
        //directorio publico
        this.app.use( express.static('public') );
 
    }

    routes(){
        
        //this.app.use(this.paths.auth, require('../routes/auth.routes'))  
    }

    listen(){
        this.server.listen(this.port, () =>{
            console.log('Server running on port: ', this.port);
            
        } )
         
    }


}

module.exports = Server;