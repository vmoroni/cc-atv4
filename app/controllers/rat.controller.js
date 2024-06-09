const Rat = require("../models/rat.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const rat = new Rat({
    chamado_cliente: req.body.chamado_cliente || '',
    chamado_it2b: req.body.chamado_it2b,
    chamado_finalizado: req.body.chamado_finalizado || false,
    cliente_nome: req.body.cliente_nome,
    cliente_telefone: req.body.cliente_telefone,
    cliente_endereco: req.body.cliente_endereco,
    cliente_bairro: req.body.cliente_bairro,
    cliente_cidade: req.body.cliente_cidade,
    cliente_andar: req.body.cliente_andar,
    equipamento_operacional: req.body.equipamento_operacional,
    fornecedor_equipamento: req.body.fornecedor_equipamento,
    tipo_equipamento: req.body.tipo_equipamento,
    patrimonio_equipamento: req.body.patrimonio_equipamento,
    serie_equipamento: req.body.serie_equipamento,
    modelo_equipamento: req.body.modelo_equipamento,
    numero_ip: req.body.numero_ip,
    tensao_fn: req.body.tensao_fn || 0,
    tensao_ft: req.body.tensao_ft || 0,
    tensao_nt: req.body.tensao_nt || 0,
    motivo_chamado: req.body.motivo_chamado,
    anormalidade_constatada: req.body.anormalidade_constatada,
    observacoes: req.body.observacoes,
    mau_uso: req.body.mau_uso || '',
    partnumber_1: req.body.partnumber_1 || '',
    partnumber_2: req.body.partnumber_2 || '',
    partnumber_3: req.body.partnumber_3 || '',
    partnumber_4: req.body.partnumber_4 || '',
    partnumber_5: req.body.partnumber_5 || '',
    partnumber_6: req.body.partnumber_6 || '',
    data_abertura: req.body.data_abertura,
    data_fechamento: req.body.data_fechamento,
    nome_usuario: req.body.nome_usuario,
    matricula_usuario: req.body.matricula_usuario,
    data_usuario: req.body.data_usuario,
    nome_tecnico: req.body.nome_tecnico,
    rg_tecnico: req.body.rg_tecnico,
    data_tecnico: req.body.data_tecnico
  });

  // Save Tutorial in the database
  Rat.create(rat, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send({ message: "RAT was created successfully!" });
  });
};

// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
  // A definir a condição de busca

  const title = req.query.title;

  Rat.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// Find a single Tutorial by Id
exports.findOne = (req, res) => {
  Rat.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Tutorial with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// find all published Tutorials
exports.findAllPublished = (req, res) => {
  Tutorial.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Rat.updateById(
    req.params.id,
    new Rat(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found RAT with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating RAT with id " + req.params.id
          });
        }
      } else res.send({ message: "RAT was updated successfully." });
    }
  );
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  Rat.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found RAT with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete RAT with id " + req.params.id
        });
      }
    } else res.send({
      message: "RAT was deleted successfully!"
    });
  });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    else res.send({ message: `All Tutorials were deleted successfully!` });
  });
};