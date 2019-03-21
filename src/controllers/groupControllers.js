import db from '../config';
import {
  createGroup, findUserById, insertAdminToGroupmembersTable, queryUsersByEmail, insertGroupMember,
} from '../config/sql';

/**
 * Group controller class.
 */
class GroupController {
  /**
   * Create group function
   * @param {object} req object
   * @param {object} res  object
   * @returns {object} a new created group
   */
  static async startGroup(req, res) {
    const { id } = req.authData.id;
    try {
      const { rows } = await db.query(findUserById, [id]);
      const { email } = rows[0];
      const { name } = req.body;
      const params = [name, email];
      const result = await db.query(createGroup, params);
      const inputs = [result.rows[0].id, id, 'admin'];
      await db.query(insertAdminToGroupmembersTable, inputs);
      const newGroup = result.rows[0];
      return res.status(201).json({
        status: 201,
        data: [newGroup],
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }

  /**
   * Add new members to a group
   * @param {object} req object
   * @param {object} res object
   * @returns {object}  The new group as an object
   */
  static async addAUserToGroup(req, res) {
    const { foundGroup, email } = req.body;
    try {
      const foundUser = await db.query(queryUsersByEmail, [email]);
      if (!foundUser) {
        return res.status(404).json({
          status: 404,
          error: 'User does not exist',
        });
      }
      const { rows } = await db.query(insertGroupMember,
        [foundGroup.groupid, foundUser.rows[0].id]);
      return res.status(201).json({
        status: 201,
        data: rows,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }
}

export const { startGroup, addAUserToGroup } = GroupController;
