const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({//camada de persistencia -> modelo do banco de dados
    // sintaxe -> forma de declarar os campo requiridos para o modelo
    firtsName: {//campo primeiro nome
        type: String, // tipo string
        require: true,// obrigatoriedade
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
        minlength: 6,//tamanho minimo de caracteres para senha
    },

});

//constante para fazer a operções no banco
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;