const catchError = require('../utils/catchError');
const User = require('../models/User');

// traer todos los usuarios
const getAll = catchError(async(req, res) => {
    const user = await User.findAll()
    return res.json(user)
});

// crear usuario
const create = catchError(async (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body;
  const user = await User.create({
    first_name,
    last_name,
    email,
    password,
    birthday,
  });
  return res.status(201).json(user)
});

// obtener usuario por id
const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  return res.json(user);
})

// eliminar usuario por id
const remove = catchError(async (req, res) => {
  const { id } = req.params;
	await User.destroy({ where: {id: id}});
  return res.sendStatus(204);
})

// actualizar usuario
const update = catchError(async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password, birthday } = req.body;
  const user = await User.update({
    first_name,
    last_name,
    email,
    password,
    birthday,
  }, { where: { id: id }, returning: true });
  return res.json(user[1][0]);
})

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update
}