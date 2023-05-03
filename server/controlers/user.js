import userModel from "../models/user.js";
import bcrypt from "bcryptjs";

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User does not exist in db" });

    const checkPw = await bcrypt.compare(password, existingUser.password);
    if (!checkPw)
      return res.status(404).json({ message: "Incorrect Password!" });

    res.status(200).json({ result: existingUser });
  } catch (error) {
    res.status(500).json({ message: "Something has wrong!" });
  }
};

export const signUp = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    age,
    dateOfBirth,
    address1,
    address2,
    city,
    country,
    password,
    confirmPassword,
  } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser)
      return res.status(404).json({ message: "User already exist in db" });

    if (password !== confirmPassword)
      return res.status(404).json({ message: "Password does not match!" });

    const hashedPw = await bcrypt.hash(password, 10);
    const result = await userModel.create({
      name: `${firstName} ${lastName}`,
      email: email,
      age: age,
      dateOfBirth: dateOfBirth,
      address: `${address1} ${address2}`,
      city: city,
      country: country,
      password: hashedPw,
    });
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong!" });
  }
};
