var express= require('express');//.Router;
var app=express.Router();

var cntr= require('../controllers/hackUserController.js');

app.route('/users').get(cntr.findAll);
app.route('/users').post(cntr.adduser);
app.route('/users/:id').put(cntr.updateuser);
app.route('/users/:id').delete(cntr.deleteuser);
app.route('/users/:id').get(cntr.findById);


module.exports=app;