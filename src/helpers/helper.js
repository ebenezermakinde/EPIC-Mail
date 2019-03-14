import jwt from 'jsonwebtoken';

class Helper {
  static generateToken(id) {
    const token = jwt.sign({
      id,
    },
    process.env.SECRET, { expiresIn: '7d' });
    return token;
  }
}
export default Helper;
