const mongodb = require('mongoose');
//função para se conectar com o banco de dados
const connectToDatabase = async () => {
    await mongodb.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@aula-sabado-api.ztw9r1b.mongodb.net/?retryWrites=true&w=majority`,
        (error) => {//parametro dentro da função para retornar o erro
            if (error) {
                return console.log('Erro ao conectar com o banco : ', error);
            }
            return console.log('Conexão ralizada com sucesso!')
        }//fechamento da função para retornar o erro caso não consig conectar com o banco de dados



    );//fechamento do parentesses da conexão com o banco
};//fechamento da função connectToDatabase

module.exports = connectToDatabase