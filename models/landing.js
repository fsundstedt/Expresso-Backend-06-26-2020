const db = require("./conn.js")

class landingModel {
  async showAll() {
    try {
        const response = await db.any(
            `SELECT id, process, brand, roast, grind, weight_grind, weight_pull, pull_time, rating, notes FROM pulls WHERE show = 1;`,
        );
        console.log('model line 9: ' + response)
        return response;
    } catch (error) {
        console.error('LOGIN ERROR:', error);
        return error;
    }
  }
}

module.exports = landingModel;