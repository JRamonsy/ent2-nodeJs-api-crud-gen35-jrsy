const { getAll, create, getOne, remove, update } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();
userRouter.route("/users")
  .get(getAll) // obtener todos los registros
  .post(create) // crear usuario

userRouter.route("/users/:id")
  .get(getOne)  // obtener usuario por ai
  .delete(remove)  // eliminar usuario por id
  .put(update)  // actualizar usuario

module.exports = userRouter;
