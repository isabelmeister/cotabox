const { Router } = require('express');
const userService = require('../service/userService');
const userRouter = Router();

userRouter.post('/', async (req,res) => {
  try {
    const { firstName, lastName, participation, color } = req.body;
    
    const created = await userService.createUser(firstName, lastName, participation, color);
    if (created.isError) {
      return res.status(created.status).json({ error: created.message });
    } 
      res.status(201).json({ message: 'created new user'});
  } catch (error) {
    res.status(500).json({ message: 'Server error'});
  }
});

userRouter.get('/', async (req, res) => {
  try {
    const getAll = await userService.getAllUsers();
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json({ message: 'Server error'}); 
  }
});

module.exports = userRouter;