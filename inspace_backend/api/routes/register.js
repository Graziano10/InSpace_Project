const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const { log } = require('console');
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
    } catch (error) {
      log(error)
    }
  
    
    // Invia una risposta di conferma
    res.status(200).json({ message: 'Registrazione avvenuta con successo!' });
};

// Funzione per generare un ID univoco

function generateId() {
  return (
    Math.random().toString(36).substring(2, 10) +
    Math.random().toString(36).substring(2, 10)
  );
}

module.exports =  registerUser ;

