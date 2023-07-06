
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const {User,  Config } = require('../data');

const loginUser = async (req, res) => {
 
  const { email, password } = req.body;

  const el = await prisma.User.findFirst({
    where: {
      email: email,
      password: password
    },
  });
  if (!el) {
    return res.status(500).json({error : "not found"});
  } else {


    const token = Math.random()
    return res.status(200).json({ token, message: 'benvenuto' });
   
  }

};





module.exports = loginUser;
