const fs = require('fs');
const path = require('path');

const registerUser = (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    // Leggere il file db.json
    const filePath = path.join(__dirname, '../data/db.json');
    const dbData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Generare un nuovo ID per l'utente
    const id = generateId();

    // Creare un nuovo oggetto utente
    const newUser = { id, first_name, last_name, email, password };

    // Aggiungere il nuovo utente all'array users
    dbData.users.push(newUser);

    // Scrivere il file db.json con i nuovi dati
    fs.writeFileSync(filePath, JSON.stringify(dbData, null, 2), 'utf-8');

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

