const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { parseISO } = require('date-fns');
const  sendmail  = require('../sendEmail');

const reserve = async (req, res) => {
  const { first_name, last_name, planet, date, email } = req.body;

  try {
    await prisma.Travel.create({
      data: {
        name: first_name + " " + last_name,
        planet: planet,
        bookingDate: parseISO(date),
        email: email
      },
    });

    // Invia una risposta di conferma
    sendmail(email)
    res.status(200).json({ message: 'Prenotazione avvenuta con successo' });
  } catch (error) {
    res.status(500).json({ message: 'Errore durante la prenotazione' });
    console.log(error)
    }
};

module.exports = reserve;

