const { password } = require('pg/lib/defaults');
const User = require('../model/user');
const secret = require('../config/auth.json');
const jwt = require('jsonwebtoken');

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

 const updateUser = async (req, res) => {
    const id = req.params;
    const {name, password, email} = req.body
    const transformaId = parseInt(id)
    await User.update(
        {
            name: name,
            password: password,
            email: email
        },
      { 
         where: {
            id:transformaId
        }
    }
    )
}

const autenticarUser = async (req, res) => {
    const {password, email}  = req.body;
    try{
        const isAutenticarUser = await User.findOne({
            where: {
                password: password,
                email: email       
                 } 
        })
        const token = jwt.sign({id:email}, secret.secret,{
            expiresIn: 86400,
        })
        return res.json({
            name:isAutenticarUser.name,     
            password:isAutenticarUser.password,
            email:isAutenticarUser.email,
        });
    }
   catch (error){
    return res.json("Usuario não encointrado")
   }
}

module.exports = { createUser, pegarDados, deleteUser, updateUser, autenticarUser };