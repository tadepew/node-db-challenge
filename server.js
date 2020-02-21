const express = require("express");
const helmet = require("helmet");

const projectRouter = require("./projects/projectRouter.js");
const resourcesRouter = require("./resources/resourcesRouter.js");
const tasksRouter = require("./tasks/tasksRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", projectRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter);

module.exports = server;
