const db = require("../data/dbConfig");

module.exports = {
  all,
  add
};

function all() {
  return db("projects");
}

function add(project) {
  return db("projects").insert(project, "id");
}
