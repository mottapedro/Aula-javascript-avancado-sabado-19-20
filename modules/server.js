const express = require('express');
const UserModel = require('../src/models/Users.Models');
const bcrypt = require('bcrypt');//modulo para criptografia de senha

const app = express();//utilizar as classe do express na constante app

app.use(express.json());//diz para o express que o corpo da requisição é um json

app.get('/home', (req, res) => {//criando uma requicisão do tipo get para uma url dominio/home
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home Page</h1>")//imprimo um html
})

//metodo get -> bucar todos os usuários
app.get("/users", async (req, res) => {
    try {
        const users = await UserModel.find({});//filtar pelo atributo no metodo find
        res.status(200).json(users)
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

//buscar pelo id
// rota da requisição : http://localhost:5000/users/"640342468c3f5f985bd96662"
app.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;//constante para armazenar o id
        const user = await UserModel.findById(id);//filtar pelo atributo no metodo findById
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).send(error.message);
    }
});
//desenvolvemos uma API -> Application Programming Interface (Interface de Programação de Aplicação) -> software 
// rota da requisição : http://localhost:5000/users
//req -> objeto da requisição(request)
//res -> objeto do response(resposta)
//gravar um registro no banco
app.post("/users", async (req, res) => {//camada de controller

    try {
        const password = await bcrypt.hashSync(req.body.password, 10);//criptografou o password
        req.body.password = password;//enviou criptografado
        const user = await UserModel.create(req.body);//com o corpo da requisição é um JSON
        res.status(201).json(user);//RESPOSTA COM O STATUS QUE FOI CRIADO O USUARIO NO BANCO

    } catch (error) {
        res.status(400).send(error.message)//retorna o erro caso não consiga gravar
    }
});

// rota da requisição : http://localhost:5000/users/"640342468c3f5f985bd96662"
// atualizar uma propriedade do usuario
app.patch("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;//constante para armazenar o id
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });//new: true -> é para atulizar o registro, porque o metodo não retorna o registro atualizado por padrão
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

//deletar um usuario
app.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;//constante para armazenar o id
        const user = await UserModel.findByIdAndRemove(id);//filtar pelo atributo no metodo findByIdAndRemove
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).send(error.message);
    }
});
const porta = 5000;

app.listen(porta, () => console.log(`Rodando com Exress na porta ${porta}`))