const db = require("./conn.js");

class SignUp {
  static async addUser(
    username,
    email,
    user_password
  ) {
    try {
      const response = await db.any(
        `INSERT INTO users
      (username, email, user_password)
      VALUES
      ($1, $2, $3) RETURNING id`,
        [username, email, user_password]
      );
      return response;
    } catch (error) {
      console.error('ERROR: ', error);
      return error;
    }
  }
}

module.exports = SignUp;