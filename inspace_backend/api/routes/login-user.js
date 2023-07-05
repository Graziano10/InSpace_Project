
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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
    console.log('errore')
    return res.status(200).json({ message: "Benvenuto" });
  }

};

module.exports = loginUser;
