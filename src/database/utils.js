const fs = require("fs");

const saveToDatabase = (DB) => {
    fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), { //not understand this line
        encoding: "utf-8",
    });
};

module.exports = { saveToDatabase };