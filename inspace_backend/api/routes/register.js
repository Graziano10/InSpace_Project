
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const regUser = require('../registrationEmail');

const prisma = new PrismaClient()



const registerUser = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    
  try {
    await prisma.User.create({
      data: {
        name: first_name + " " + last_name,
        email: email,
        password : password
      },
    })
    regUser(first_name, last_name, email)
    res.status(200).json({ message: 'Registrazione avvenuta con successo!' });
  } catch (error) {
    res.status(400).json({ message : 'error'})
    console.log(error)
  }
};

// Funzione per generare un ID univoco

function generateId() {
  return (
    Math.random().toString(36).substring(2, 10) +
    Math.random().toString(36).substring(2, 10)
  );
}

module.exports =  registerUser ;

