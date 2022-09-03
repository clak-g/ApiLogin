const UserController={}
const Course = require("../models/usuarios.js")
const user_repository = require("../repositories/user_repository")
UserController.getAll=(req,res)=>{

user_repository.getAll()


    .then((users) => {
        if(users.rows.length == 0){
            res.status(400).send("not found");
        }res.json(users.rows);
    }).catch((error) => {
        res.status(500).send(error.stack);
    });

}

user_repository.ValidarUsuario(){
    
    }


module.exports = courseController;