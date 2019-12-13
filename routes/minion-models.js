const db = require("../config/dbConfig");

module.exports = {
  addMinion,
  getMinions,
  deleteMinion
};

function addMinion(minion) {
  return db("minions").insert(minion);
}

function getMinions() {
  return db("minions");
}

function deleteMinion(id) {
  return db("minions")
    .where("id", id)
    .del();
}
