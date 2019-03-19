import pool from './config';

export default {
  query(text, params) {
    return pool.query(text, params);
  },
};
