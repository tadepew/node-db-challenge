const db = require("../data/dbConfig");

module.exports = {
  all,
  add
};

function all() {
  return db("resources");
}

function add(resource) {
  return db("resources").insert(resource, "id");
}
