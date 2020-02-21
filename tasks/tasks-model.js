const db = require("../data/dbConfig");

module.exports = {
  all,
  add
};

function all() {
  return db("projects")
    .join("tasks", "tasks.project_id", "projects.id")
    .select(
      "tasks.description",
      "tasks.notes",
      "tasks.completed",
      "projects.name as projectName",
      "projects.description as projectDescrpition"
    );
}

function add(task) {
  return db("tasks").insert(task, "id");
}
