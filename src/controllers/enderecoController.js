const { Usuario, Endereco } = require("../models");
const session = require("express-session");

module.exports = {  

  formEndereco: async (req, res) => {
    const { id } = req.params;

      const enderecos = await Endereco.findAll({
        where: { usuarios_idusuarios: id },
      });

      let usuario = await Usuario.findAll({where: {idusuarios: id}});
      console.log(enderecos)
   
      return res.render("painel-adicionaEndereco", {
        enderecos,
        usuario,
        css: ["style.css", "painel-formEndereco.css", 'painel-usuario.css'],
        js: [],
      });
  },
    
 

  adicionarEndereco: async (req, res) => {
    const { id } = req.params;
      console.log('id usuario do adicionar endereco', id)
        const {
        logradouro,
        endereco_numero,
        complemento,
        cep,
        bairro,
        cidade,
        estado,
      } = req.body;    
     
      await Endereco.create({
        logradouro,
        endereco_numero,
        complemento,
        cep,
        bairro,
        cidade,
        estado,
        pais: 'Brasil',
        usuarios_idusuarios: id,
      });

      res.redirect('/painel');     
  },

 
  editarEndereco: async (req, res) => {    
    const { id } = req.params;
    console.log('console do id editar endereco:', id)
      const {
        logradouro,
        endereco_numero,
        complemento,
        cep,
        bairro,
        cidade,
        estado,
        pais
      } = req.body;
      console.log(
        logradouro,
        endereco_numero,
        complemento,
        cep,
        bairro,
        cidade,
        estado,
        pais)

      await Endereco.update(
        {
          logradouro,
          endereco_numero,
          complemento,
          cep,
          bairro,
          cidade,
          estado,
          pais,
        },
        {
          where: { usuarios_idusuarios: id },
        }
      );
      res.redirect('/painel');   
  },

  deletarEndereco: async (req, res) => {   
   const { id } = req.params;

      await Endereco.destroy({
        where: { idenderecos: id },
      });

      res.redirect('/painel');    
  },

  adicionarEnderecoCompra: async (req, res) => {
    const { id } = req.params;
      console.log('id usuario do adicionar endereco', id)
        const {
        logradouro,
        endereco_numero,
        complemento,
        cep,
        bairro,
        cidade,
        estado,
      } = req.body;    
     
      await Endereco.create({
        logradouro,
        endereco_numero,
        complemento,
        cep,
        bairro,
        cidade,
        estado,
        pais: 'Brasil',
        usuarios_idusuarios: id,
      });

      if (req.session.login) {
        let idUsuario = req.session.login;
        let enderecos = await Endereco.findAll({
          include: [{ model: Usuario, as: "usuarios" }],
          where: { usuarios_idusuarios: idUsuario },
        });
        let usuario = await Usuario.findAll({where: {idusuarios: idUsuario}});
        return res.render("compra", {
          enderecos,
          usuario,
          produtos: req.session.produtos,
          frete: req.session.frete,
          prazo: req.session.prazo,
          css: ["style.css", "compra.css"],
          js: ["compra.js"],
        });
      }
  },
};
