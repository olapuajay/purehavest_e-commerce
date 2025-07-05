import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {users} from "../tempData/users.js";

// user register function
export const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const existingUser = users.find((user) => {
    user.email === email;
  });
  if (existingUser) {
    return res.status(409).json({ message: "user already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 13);
  const newUser = {
    id: `u${users.length + 1}`,
    name,
    email,
    password: hashedPassword,
    role,
  };
  users.push(newUser);
  const token = jwt.sign(newUser, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.status(201).json({
    message: "succesfully registerd",
    token,
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    },
  });
};

// login function

export const login = async (req, res) => {
  const { email, password } = req.body;
  const found = users.find(
    (user) => user.email === email && user.password === password
  );
  if (found) {
    const token = jwt.sign(found, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({
      message: "Login successful",
      user: {
        id: found.id,
        name: found.name,
        email: found.email,
        role: found.role,
      },
      token,
    });
  } else {
    res.status(400).json({ message: "Access Denied" });
  }
};

