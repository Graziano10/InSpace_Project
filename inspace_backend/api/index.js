const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "inspace_db",
  password: "appleinc1",
  port: 5432,
});

const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(bodyParser.json());

app.use("/", require("./routes/Home"));

app.use("/users", require("./routes/users"));

app.use("/register", require("./routes/register"));

app.use("/login", require("./routes/login-user"));

app.listen(3000, () => {
  console.log("Server up and running on http://localhost:3000...");
});


