export async function signup(req, res) {
  try {
    const { email, password, username } = req.body; // need parser: the app.use(express.json())  in the server.js

    if (!email || !password || !username)
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
  } catch (error) {}
  res.send("signup");
}

export async function login(req, res) {
  res.send("login");
}

export async function logout(rea, res) {
  res.send("logout");
}
