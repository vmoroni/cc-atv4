module.exports = app => {
  const rat = require("../controllers/rat.controller.js");

  var router = require("express").Router();

  // Create a new RAT
  router.post("/", rat.create);

  // Retrieve all RATs
  // router.get("/", rat.findAll);
  router.get("/consulta-dados", rat.findAll);

  // Retrieve all published RATs
  router.get("/published", rat.findAllPublished);

  // Retrieve a single RAT with id
  router.get("/:id", rat.findOne);

  // Update a RAT with id
  router.put("/:id", rat.update);

  // Delete a RAT with id
  router.delete("/:id", rat.delete);

  // Delete all RATs
  router.delete("/", rat.deleteAll);

  app.use('/', router);
};