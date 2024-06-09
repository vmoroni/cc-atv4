const sql = require("./db.js");

// constructor
const Rat = function (rat) {
  this.chamado_cliente = rat.chamado_cliente;
  this.chamado_it2b = rat.chamado_it2b;
  this.chamado_finalizado = rat.chamado_finalizado
  this.cliente_nome = rat.cliente_nome;
  this.cliente_telefone = rat.cliente_telefone;
  this.cliente_endereco = rat.cliente_endereco;
  this.cliente_bairro = rat.cliente_bairro;
  this.cliente_cidade = rat.cliente_cidade;
  this.cliente_andar = rat.cliente_andar;
  this.equipamento_operacional = rat.equipamento_operacional;
  this.fornecedor_equipamento = rat.fornecedor_equipamento;
  this.tipo_equipamento = rat.tipo_equipamento;
  this.patrimonio_equipamento = rat.patrimonio_equipamento;
  this.serie_equipamento = rat.serie_equipamento;
  this.modelo_equipamento = rat.modelo_equipamento;
  this.numero_ip = rat.numero_ip;
  this.tensao_fn = rat.tensao_fn;
  this.tensao_ft = rat.tensao_ft;
  this.tensao_nt = rat.tensao_nt;
  this.motivo_chamado = rat.motivo_chamado;
  this.anormalidade_constatada = rat.anormalidade_constatada;
  this.observacoes = rat.observacoes;
  this.mau_uso = rat.mau_uso;
  this.partnumber_1 = rat.partnumber_1;
  this.partnumber_2 = rat.partnumber_2;
  this.partnumber_3 = rat.partnumber_3;
  this.partnumber_4 = rat.partnumber_4;
  this.partnumber_5 = rat.partnumber_5;
  this.partnumber_6 = rat.partnumber_6;
  this.data_abertura = rat.data_abertura;
  this.data_fechamento = rat.data_fechamento;
  this.nome_usuario = rat.nome_usuario;
  this.matricula_usuario = rat.matricula_usuario;
  this.data_usuario = rat.data_usuario;
  this.nome_tecnico = rat.nome_tecnico;
  this.rg_tecnico = rat.rg_tecnico;
  this.data_tecnico = rat.data_tecnico;
};

Rat.create = (newRat, result) => {
  sql.query("INSERT INTO formulario SET ?", newRat, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created rat: ", { id: res.insertId, ...newRat });
    result(null, { id: res.insertId, ...newRat });
  });
};

// Tutorial.findById = (id, result) => {
//   sql.query(`SELECT * FROM tutorials WHERE id = ${id}`, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     if (res.length) {
//       console.log("found tutorial: ", res[0]);
//       result(null, res[0]);
//       return;
//     }

//     // not found Tutorial with the id
//     result({ kind: "not_found" }, null);
//   });
// };

Rat.getAll = (title, result) => {
  let query = "SELECT * FROM formulario";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    // console.log("tutorials: ", res);
    result(null, res);
  });
};

// Tutorial.getAllPublished = result => {
//   sql.query("SELECT * FROM tutorials WHERE published=true", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log("tutorials: ", res);
//     result(null, res);
//   });
// };

Rat.updateById = (id, rat, result) => {
  sql.query(
    `UPDATE formulario SET
    chamado_cliente = ?, chamado_it2b = ?, chamado_finalizado = ?,
    cliente_nome = ?, cliente_telefone = ?, cliente_endereco = ?,
    cliente_bairro = ?, cliente_cidade = ?, cliente_andar = ?,
    equipamento_operacional = ?, fornecedor_equipamento = ?,
    tipo_equipamento = ?, patrimonio_equipamento = ?, serie_equipamento = ?,
    modelo_equipamento = ?, numero_ip = ?, tensao_fn = ?, tensao_ft = ?,
    tensao_nt = ?, motivo_chamado = ?, anormalidade_constatada = ?,
    observacoes = ?, mau_uso = ?, partnumber_1 = ?, partnumber_2 = ?,
    partnumber_3 = ?, partnumber_4 = ?, partnumber_5 = ?, partnumber_6 = ?,
    data_abertura = ?, data_fechamento = ?, nome_usuario = ?,
    matricula_usuario = ?, data_usuario = ?, nome_tecnico = ?,
    rg_tecnico = ?, data_tecnico = ?
    WHERE id = ?`,
    [
      rat.chamado_cliente,
      rat.chamado_it2b,
      rat.chamado_finalizad,
      rat.cliente_nome,
      rat.cliente_telefone,
      rat.cliente_endereco,
      rat.cliente_bairro,
      rat.cliente_cidade,
      rat.cliente_andar,
      rat.equipamento_operacional,
      rat.fornecedor_equipamento,
      rat.tipo_equipamento,
      rat.patrimonio_equipamento,
      rat.serie_equipamento,
      rat.modelo_equipamento,
      rat.numero_ip,
      rat.tensao_fn,
      rat.tensao_ft,
      rat.tensao_nt,
      rat.motivo_chamado,
      rat.anormalidade_constatada,
      rat.observacoes,
      rat.mau_uso,
      rat.partnumber_1,
      rat.partnumber_2,
      rat.partnumber_3,
      rat.partnumber_4,
      rat.partnumber_5,
      rat.partnumber_6,
      rat.data_abertura,
      rat.data_fechamento,
      rat.nome_usuario,
      rat.matricula_usuario,
      rat.data_usuario,
      rat.nome_tecnico,
      rat.rg_tecnico,
      rat.data_tecnico,
      id
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated RAT: ", { id: id, ...rat });
      result(null, { id: id, ...rat });
    }
  );
};

Rat.remove = (id, result) => {
  sql.query("DELETE FROM formulario WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted RAT with id: ", id);
    result(null, res);
  });
};

// Tutorial.removeAll = result => {
//   sql.query("DELETE FROM tutorials", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log(`deleted ${res.affectedRows} tutorials`);
//     result(null, res);
//   });
// };

module.exports = Rat;