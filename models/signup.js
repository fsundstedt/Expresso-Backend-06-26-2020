const db = require("./conn.js");

class SignUp {
  static async addUser(
    username,
    email,
    user_password
  ) {
    try {
      const duplicateCheck = await db.any(
        `SELECT * FROM users
        WHERE username = $1`,
        [username]
      );

      if (duplicateCheck.length === 0) {
        const response = await db.any(
          `INSERT INTO users
          (username, email, user_password)
          VALUES
          ($1, $2, $3) RETURNING id`,
          [username, email, user_password]
        );
        return response;
      } else {
        return [ {id: 0} ]
      }
    } catch (error) {
      console.error('ERROR: ', error);
      return error;
    }
  }
}

module.exports = SignUp;