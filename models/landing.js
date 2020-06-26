const db = require("./conn.js")

class landingModel {
  async showAll() {
    try {
        const response = await db.any(
            `SELECT id, brand, roast, grind, weight_grind, weight_pull, pull_time, rating, notes FROM pulls WHERE show = 1;`,
        );
        return response;
    } catch (error) {
        console.error('LOGIN ERROR:', error);
        return error;
    }
  }
}

module.exports = landingModel;