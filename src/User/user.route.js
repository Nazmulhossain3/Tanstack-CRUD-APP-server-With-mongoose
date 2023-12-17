const express = require('express');
const { createUser, getAllUsers, getSingleUser } = require('./user.controller');

const route = express.Router()

route.post('/createUser', createUser)
route.get('/getAllUsers',getAllUsers)
route.get('/singleUser/:id',getSingleUser)

module.exports = route