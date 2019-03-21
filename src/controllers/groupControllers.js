import db from '../config';
import { createGroup, findUserById, insertAdminToGroupmembersTable } from '../config/sql';

/**
 * Group controller class.
 */
class GroupController {
  /**
   * Create group function
   * @param {*} req object
   * @param {*} res  object
   * @returns {*} a new created group
   */
  static async startGroup(req, res) {
    const { id } = req.authData.id;
    try {
      const { rows } = await db.query(findUserById, [id]);
      const { email } = rows[0];
      const { name } = req.body;
      const params = [name, email];
      const result = await db.query(createGroup, params);
      const inputs = [result.rows[0].id, id];
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
}

export const { startGroup } = GroupController;
