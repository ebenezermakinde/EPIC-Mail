import db from '../config';
import { fetchSpecificGroupByUser } from '../config/sql';


/**
 * A class that helps
 * with group controls.
 */
class GroupControls {
  /**
   * Helps find groups.
   * @param {object} req  object
   * @param {object} res  object
   * @param {function} next - Calls the next function
   * @returns {object} success or failure object
   */
  static async findSpecificGroup(req, res, next) {
    const { id } = req.authData;
    const gId = Number(req.params.groupId);
    try {
      const { rows, rowCount } = await db.query(fetchSpecificGroupByUser, [id, gId]);
      if (rowCount === 0) {
        return res.status(404).json({
          status: 404,
          error: 'Group does not exist',
        });
      }
      const foundGroup = rows[0];
      req.body.foundGroup = foundGroup;
      return next();
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }
}

export default GroupControls;
