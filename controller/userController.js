const User = require('../model/user');

const createUser = async (req, res) => {
    const { name, password, email } = req.body;
    await User.create({
        name: name,
        password: password,
        email: email
    }).then(() => {
        res.json('Cadastro de usuário realizado com sucesso!');
        console.log('Cadastro de usuário realizado com sucesso!');
    }).catch((erro) => {
        res.error();
        console.log(`Ops, deu erro: ${erro}`);
    })
}


const pegarDados = async (req, res) => {
    const users = await User.findAll();
     return res.json(users);
    
 }

const deleteUser = async (req, res) => {
        const id = req.params;
        await User.destroy({
            where:{
                id:id
            }
        })
 }

 const upsdateUser = async (req, res) => {
    const id = req.params;
    await User.destroy({
        where:{
            id:id
        }
    })
}

module.exports = { createUser, pegarDados };