import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if(!token) {
      return res.status(401).json({ message: "Access denied. No token provided." })
    }

    token = token.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);

    req.user = user;
    req.role = user.role;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Access denied. Invalid token." });
  }
};