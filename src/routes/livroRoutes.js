import express from "express";
import modelLivro from "../model/modelLivro.js";

const routes = express.Router();

routes.post("/livro", (req, res) => {
  let { titulo_livro, autor_livro, descricao_livro } = req.body;

  modelLivro
    .create({
      titulo_livro,
      autor_livro,
      descricao_livro,
    })
    .then(() => {
      return res
        .status(201)
        .json({ errorStatus: false, messageStatus: "livro inserido" });
    })
    .catch((error) => {
      return res.status(400).json({
        errorStatus: true,
        messageStatus: error,
      });
    });
});

routes.get("/livros", (req, res) => {
  modelLivro
    .findAll()
    .then((livros) => {
      return res.status(200).json({ livros });
    })
    .catch((error) => {
      return res.status(500).json({
        errorStatus: true,
        messageStatus: "Erro ao buscar os livros",
        error: error.message,
      });
    });
});

routes.get("/livros/:id", (req, res) => {
  const { id } = req.params;

  modelLivro
    .findByPk(id)
    .then((livro) => {
      if (livro) {
        return res.status(200).json({ livro });
      } else {
        return res.status(404).json({
          errorStatus: true,
          messageStatus: "Livro não encontrado",
        });
      }
    })
    .catch((error) => {
      return res.status(500).json({
        errorStatus: true,
        messageStatus: "Erro ao buscar o livro",
        error: error.message,
      });
    });
});

routes.put("/livros/:id", (req, res) => {
  const { id } = req.params;
  const { titulo_livro, autor_livro, descricao_livro } = req.body;

  modelLivro
    .update(
      {
        titulo_livro,
        autor_livro,
        descricao_livro,
      },
      {
        where: {
          id,
        },
      }
    )
    .then((result) => {
      if (result[0] === 1) {
        return res
          .status(200)
          .json({ errorStatus: false, messageStatus: "Livro atualizado" });
      } else {
        return res
          .status(404)
          .json({ errorStatus: true, messageStatus: "Livro não encontrado" });
      }
    })
    .catch((error) => {
      return res.status(500).json({
        errorStatus: true,
        messageStatus: "Erro ao atualizar o livro",
        error: error.message,
      });
    });
});

routes.delete("/livros/:id", (req, res) => {
  const { id } = req.params;

  modelLivro
    .destroy({
      where: {
        id,
      },
    })
    .then((result) => {
      if (result === 1) {
        return res
          .status(200)
          .json({ errorStatus: false, messageStatus: "Livro deletado" });
      } else {
        return res
          .status(404)
          .json({ errorStatus: true, messageStatus: "Livro não encontrado" });
      }
    })
    .catch((error) => {
      return res.status(500).json({
        errorStatus: true,
        messageStatus: "Erro ao deletar o livro",
        error: error.message,
      });
    });
});

export default routes;
