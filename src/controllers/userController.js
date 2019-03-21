import { hashSync, compareSync } from 'bcrypt';
import db from '../config';
import { generateToken } from '../helpers/helper';
import { createUser, queryUsersByEmail } from '../config/sql';

/**
 * UserController class
 */
class UserController {
  /**
   * User signup function
   * @param {object} req
   * @param {object} res
   * @returns {object} user object
   */
  static async signUp(req, res) {
    const {
      firstname, lastname, email, password,
    } = req.body;
    const params = [
      firstname,
      lastname,
      email,
      hashSync(password, 10),
    ];

    try {
      const { rows } = await db.query(createUser, params);
      if (rows) {
        const authUser = rows[0].id;
        const token = generateToken(authUser);
        return res.status(201).json({
          status: 201,
          data: [{
            token,
          }],
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }

  /**
   * Handles login
   * @param {object} req
   * @param {object} res
   * @returns {object} with user token
   */
  static async login(req, res) {
    const { email, password } = req.body;
    const params = [email];
    try {
      const { rows } = await db.query(queryUsersByEmail, params);
      if (rows.length === 0) {
        res.status(401).json({
          status: 401,
          error: 'Authentication failed',
        });
      }
      if (rows[0]) {
        const comparePassword = compareSync(password, rows[0].password);
        if (!comparePassword) {
          return res.status(401).json({
            status: 401,
            error: 'Incorrect login details',
          });
        }
        const authUser = rows[0].id;
        const token = generateToken(authUser);
        return res.status(200).json({
          status: 200,
          data: [{
            token,
          }],
        });
      }
    } catch (error) {
      res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }
}
export default UserController;
