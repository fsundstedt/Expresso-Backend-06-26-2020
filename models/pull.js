const db = require("./conn.js");

class Pull {
  static async addPull(
    id,
    process,
    brand,
    roast,
    grind,
    grindWeight,
    waterWeight,
    extractionTime,
    rating,
    favorite,
    notes,
    show,
  ) {
    try {
      const response = await db.any(
        `INSERT INTO pulls
        (user_id, process, brand, roast, grind, weight_grind, weight_pull, pull_time, rating, favorite, notes, show)
        VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING user_id`,
        [ id, process, brand, roast, grind, grindWeight, waterWeight, extractionTime, rating, favorite, notes, show ]
      );
      return response;
    } catch (error) {
      console.error('ERROR: ', error);
      return error;
    }
  }
}

module.exports = Pull;