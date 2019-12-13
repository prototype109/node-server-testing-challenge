const express = require("express");
const Minion = require("../routes/minion-models");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).send("server is up");
});

server.post("/minions", async (req, res) => {
  try {
    const minions = await Minion.addMinion(req.body);
    if (minions.length) {
      res.status(200).json({ message: "successfully added minion" });
    } else {
      res.status(400).json({ message: "minion name not unique" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

server.get("/minions", async (req, res) => {
  try {
    const minions = await Minion.getMinions();
    res.status(200).json(minions);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.delete("/minions/:id", async (req, res) => {
  try {
    const numDel = await Minion.deleteMinion(req.params.id);
    if (numDel) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: "id not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = server;
