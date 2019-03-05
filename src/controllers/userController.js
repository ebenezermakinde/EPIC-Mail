import users from '../utils/dummyUser';
import Helpers from '../helpers/helper';

const { generateToken } = Helpers;

class UserController {
  static signUp(req, res) {
    const newUser = {
      id: users.length + 1,
      email: req.body.email,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      othername: req.body.othername,
      password: req.body.password,
    };
    const token = generateToken(newUser);
    users.push(newUser);
    return res.status(201).json({
      status: 200,
      data: [{
        token,
      }],
    });
  }
}
export default UserController;
