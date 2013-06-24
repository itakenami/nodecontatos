module.exports = function(app) {
	
	var Contato = app.models.contato;
	
	var ContatoController = {
		
    	index: function(req, res) {
			Contato.findAll(function(contatos){
				var params = {contatos: contatos};
      	  		res.render('contatos/index', params);
			});
		},
		
    	add: function(req, res) {
			var params = {
				contato:{}
			};
      	  	res.render('contatos/form', params);
		},
		
		save: function(req, res) {
			
  			var contato = req.body.contato;
		  	Contato.insert(contato, function(result){
				res.redirect('/contatos');
		  	});
  			
		},
		
		show: function(req, res) {
			
			Contato.findById(req.params.id,function(contato){
	    		params = {
					contato: contato
				};
	  		  	res.render('contatos/show', params);
			});

		},
		
		edit: function(req, res) {
			Contato.findById(req.params.id,function(contato){
	    		params = { 
					contato: contato
				};
	  		  	res.render('contatos/form', params);
			});
		},
		
		update: function(req, res) {
      		var contato = req.body.contato;
			contato.id=req.params.id;
			Contato.update(contato,function(result){
				res.redirect('/contatos');
			});
    	},
		
    	delete: function(req, res) {
			Contato.delete(req.params.id,function(result){
				res.redirect('/contatos');
			});
     	}
		
	}
	
	return ContatoController;
};