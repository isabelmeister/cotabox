const { Router } = require('express');
const userService = require('../service/userService');

const userRouter = Router();

userRouter.post('/', async (req,res) => {
  try {
    const { firstName, lastName, participation } = req.body;
    
    const created = await userService.createUser(firstName, lastName, participation);
    if (created.isError) {
      return res.status(created.status).json({ error: created.message });
    } 
      res.status(201).json({ message: 'created new user'});
  } catch (error) {
    res.status(400).json({ message: 'Server error'});
  }
});

userRouter.get('/', async (req, res) => {
  try {
    const getAll = await userService.getAllUsers();
    /* console.log(getAll); */
    res.status(200).json(getAll);
  } catch (error) {
    res.status(400).json({ message: 'Server error'}); 
  }
});

/* userRouter.get('/', async (req, res) => {
  try {
    const allParticipation = await userService.getAllParticipations()
    console.log(allParticipation)
    res.status(200).json(allParticipation);
  } catch (error) {
    res.status(400).json({ message: 'Server error'});
  }
}); */

module.exports = userRouter;