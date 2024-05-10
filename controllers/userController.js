

import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";
import User from "../model/userModel.js"; 

const signup = async (req, res) => {
  const { firstName, lastName, password, email } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.send("User already exists");
    }

    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      email,
      firstName,
      lastName,
      password: hashPassword,
    });
    if (!newUser) {
      return res.send("User not created");
    }
await newUser.save()
    const token = generateToken(email);
    res.send(token);
  } catch (error) {
    console.log(error);
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.send("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.send("Invalid credentials");
    }
    const token = generateToken(email);

    res.send(token);
  } catch (error) {}
};

export{
    signin,
    signup
}