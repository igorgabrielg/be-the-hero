//vai exportar um objeto com os metodos http
const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  
  async index(request, response){
    const ongs = await connection('ongs').select('*');
  
    return response.json(ongs);
  },

  async create(request, response){
    const {name, email, whatsapp, city, uf} = request.body;

  const id = crypto.randomBytes(4).toString('HEX');

  //conectando com o db
  await connection('ongs').insert({
    id, 
    name,
    email,
    whatsapp,
    city,
    uf
  })

  //retornar so o id para se conectar na aplicacao
  return response.json({id});
  }
};