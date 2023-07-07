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
    sendmail(first_name, email, planet)
    res.status(200).json({ message: 'Prenotazione avvenuta con successo' });
  } catch (error) {
    res.status(400).json({ message: 'Errore durante la prenotazione' });
    }
};

module.exports = reserve;

