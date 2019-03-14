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
      password: req.body.password,
    };
    const token = generateToken(newUser.id);
    users.push(newUser);
    return res.status(201).json({
      status: 201,
      data: [{
        token,
      }],
    });
  }

  static login(req, res) {
    const { foundUser } = req.body;
    const token = generateToken(foundUser.id);
    return res.status(200).json({
      status: 200,
      data: [{
        token,
      }],
    });
  }
}
export default UserController;
