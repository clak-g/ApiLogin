const pool = require('./dbconnection')
const user_repository = {}


user_repository.getAll = (username, password) => {
    const context =  pool()
    return context.query('select * from tb_user where username ')

}
module.exports = user_repository;