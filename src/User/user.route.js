const express = require('express');
const { createUser, getAllUsers, getSingleUser, deleteUser, updateUser } = require('./user.controller');

const route = express.Router()

route.post('/createUser', createUser)
route.get('/getAllUsers',getAllUsers)
route.get('/singleUser/:id',getSingleUser)
route.delete('/deleteUser/:id', deleteUser)
route.put('/updateUser/:id', updateUser)

module.exports = route