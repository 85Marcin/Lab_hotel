const express = require("express");
const ObjectId = require("mongodb").ObjectId;

const createRouter = function (collection) {
  const router = express.Router();

  router.get("/", (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs));
  });
  return router;
};

module.exports = createRouter;
