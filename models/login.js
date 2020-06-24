const db = require("./conn.js"),
  bcrypt = require("bcrypt");

class loginUser {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  checkPassword(hashedPassword) {
    return bcrypt.compareSync(this.password, hashedPassword);
  }

  async login(email) {
    try {
      const response = await db.any(
        `SELECT id, username, email, user_password FROM users WHERE email = $1;`,
        [email]
      );

      const isValid = this.checkPassword(response[0].user_password);

      if (!!isValid) {
        const { id, first_name, last_name } = response[0];
        return { isValid, user_id: id, first_name, last_name };
      } else {
        return { isValid };
      }
    } catch (error) {
      console.error("LOGIN ERROR:", error);
      return error;
    }
  }
}

module.exports = loginUser;