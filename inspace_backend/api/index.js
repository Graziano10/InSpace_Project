const express = require("express");
const app = express();
const bodyParser = require("body-parser");



const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(bodyParser.json());

app.use("/", require("./routes/Home"));

app.use("/users", require("./routes/users"));

app.use("/register", require("./routes/register"));

app.use("/login", require("./routes/login-user"));

app.use("/reservation" , require('./routes/reservation'))


app.listen(3000, () => {
  console.log("Server up and running on http://localhost:3000...");
});


