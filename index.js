//console.log("Olá mundo!!!");
const dotenv = require('dotenv');
const connectToDatabase = require("./src/database/connect");//constante para se conectar
dotenv.config()//função que identifica o arquivo .env
connectToDatabase();// função que se conecta

require("./modules/server")//inicializa o server