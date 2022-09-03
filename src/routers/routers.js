const { Router} = require("express");
const router = Router();
const apiRoute = '/api';
const userController= require('../controllers/user_controller')


//course
router.get(apiRoute+'/user',userController.getAll)


module.exports = router;