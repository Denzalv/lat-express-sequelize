const express = require("express");
const { User } = require(".models/index");

const app = express();
const PORT = 3000;

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.post("/users", (req, res) => {
  const body = req.body;
  const userCandidate = {
    firstName: body["first_name"],
    lastName: body["last_name"],
    email: body["email"],
    password: body["password"],
  };

  try {
    await User.create(userCandidate);
    res.status(201).send(userCandidate);
  } catch (error) {
    res.status(500).send({
      message: err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log("server is listening on port", PORT);
});

//================================
// const { User } = require("./models/index");

// async function createUser() {
//   try {
//     const created = await User.create({
//       firstName: "Bob",
//       lastName: "Alice",
//       password: NULL,
//       email: "bob@mail.com",
//     });
//     return created;
//   } catch (err) {
//     throw err;
//   }
// }

// createUser()
//   .then((created) => console.log(created))
//   .catch((err) => console.log(err));
