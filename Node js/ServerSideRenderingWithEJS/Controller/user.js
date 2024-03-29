const { v4: uuidv4 } = require("uuid");
const User = require("../modals/user");
const { setUser } = require("../service/auth");

const handleUserSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await User.create({ name, email, password });
    return res.status(200).send("User created successfully");
  } catch (error) {
    return res.status(400).send(error.message); 
  }
};

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user)
    return res.render("login", {
      error: "Invalid Username or Password",
    });

  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie("uid", sessionId);
  return res.redirect("/");
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
