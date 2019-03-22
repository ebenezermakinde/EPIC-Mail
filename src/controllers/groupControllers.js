import db from '../config';
import {
  createGroup,
  findUserById,
  insertAdminToGroupmembersTable,
  queryUsersByEmail,
  insertGroupMember,
  removeGroupMembers,
  fetchAllGroupsByUser,
  patchGroupName,
  deleteGroup,
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
    const { id } = req.authData;
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

  /**
   * Delete user from a group
   * @param {object} req request object
   * @param {object} res response object
   * @param {function} next - Calls the next function/route handler
   * @returns {object} failure or success message.
   */
  static async deleteUserFromGroup(req, res) {
    const { foundGroup } = req.body;
    const member = Number(req.params.userId);
    try {
      const removeMember = await db.query(removeGroupMembers, [foundGroup.groupid, member]);
      if (!removeMember) {
        return res.status(404).json({
          status: 404,
          error: 'The user cannot be found',
        });
      }
      return res.status(200).json({
        status: 200,
        data: 'User was removed from the group',
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }

  /**
   * Get a groups a user owns
   * @param {object} req object
   * @param {object} res object
   * @returns {object} object of the users group
   */
  static async getAllGroupsByUser(req, res) {
    const { id } = req.authData;
    try {
      const { rows, rowCount } = await db.query(fetchAllGroupsByUser, [id]);
      if (rowCount === 0) {
        return res.status(404).json({
          status: 404,
          error: 'No groups created yet',
        });
      }
      return res.status(200).json({
        status: 200,
        data: rows,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }

  /**
   * Edit name of a groups user owns
   * @param {object} req object
   * @param {object} res object
   * @returns {object} object of the edited group with new name
   */
  static async editGroupByName(req, res) {
    const { foundGroup } = req.body;
    try {
      const { rows } = await db.query(patchGroupName, [req.body.name, foundGroup.groupid]);
      const patchedGroup = rows[0];
      const { id, name, role } = patchedGroup;
      return res.status(200).json({
        status: 200,
        data: [{
          id,
          name,
          role,
        }],
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }

  /**
   * Delete Specific as specified by user
   * @param {object} req  object
   * @param {object} res object
   * @param {function} next - Calls the next function/module
   * @returns {object} success or failure response
   */
  static async deleteSpecificGroup(req, res) {
    const { foundGroup } = req.body;
    try {
      await db.query(deleteGroup, [foundGroup.groupid]);
      return res.status(200).json({
        status: 200,
        message: 'Group deleted successfully',
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }
}

export const {
  startGroup,
  addAUserToGroup,
  deleteUserFromGroup,
  getAllGroupsByUser,
  editGroupByName,
  deleteSpecificGroup,
} = GroupController;
