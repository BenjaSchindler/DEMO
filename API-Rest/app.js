const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require('cors')
const bodyparser = require('body-parser')
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.get("/api", (req , res) => {
    res.json({
        mensaje: "Nodejs and JWT"
    });
});


const users = [ 'uai', 'benja', 'juandiego'];
const passwords = ['uai', 'benja', 'juandiego']

let usuarios = [
    {
    "name": "juandiego",
    "email": "jgaldames@alumnos.uai.cl",
    "birthdate": "11-04-2000",
    "id": 1
    },
    {
      "name": "benja",
      "email": "bschindler@alumnos.uai.cl",
      "birthdate": "11-04-2000",
      "id": 2
    }
]
  

app.post("/api/login", (req , res) =>{
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    let datos = userData(req.body.username)
    console.log('datos pedidos')
    if (isUser(req.body.username, req.body.password)){
        jwt.sign({datos}, 'secretkey', {expiresIn: "3m"}, (err, token) => {
            res.json({
                token    
            });   
        });
    }else{
        res.sendStatus(403);
    }
});

app.post("/api/posts", verifyToken, (req , res) => {
    jwt.verify(req.token, 'secretkey', (error, authData) =>{
        if(error){
            res.sendStatus(403);
        }else{
            res.json({
                mensaje: "Post fue creado",
                authData : authData
            });
        }
    });
});

function userData(user){
    return usuarios.find(usuario => usuario.name === user)
}

function isUser(user, password){
    if (users.includes(user) && passwords.includes(password)){
        return true
    }else {
        return false
    }
}

// Authorization: Bearer <token>
function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if(bearerHeader){
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}

app.listen(3001, function (){
     console.log("nodejs app running...");
});
