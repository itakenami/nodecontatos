module.exports = function(app) {
	
	var contatos = app.controllers.contatos;
  
  	app.get('/contatos', contatos.index);
	app.post('/contatos', contatos.save);
  	app.get('/contatos/add', contatos.add);
  	
	app.get('/contatos/:id', contatos.show);
  	app.get('/contatos/:id/edit', contatos.edit);  
  	app.post('/contatos/:id', contatos.update);
  	app.get('/contatos/:id/delete', contatos.delete);
};