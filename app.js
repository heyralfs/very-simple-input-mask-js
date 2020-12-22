var cnpj = document.getElementById('cnpj');
var telefone = document.getElementById('telefone');
var cep = document.getElementById('cep');

cnpj.addEventListener('input', (e) => {
      var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
      e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '');
    });
    
telefone.addEventListener('input', (e) => {
	if(e.target.value.length > 13) {
  	var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
  	e.target.value = !x[2] ? x[1] : '(' + x[1] + ')' + x[2] + '-' + x[3];
   } else {
   	var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,4})(\d{0,4})/);
  	e.target.value = !x[2] ? x[1] : '(' + x[1] + ')' + x[2] + '-' + x[3];
   }
});

cep.addEventListener('input', (e) => {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})/);
  e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + '-' + x[3];
});
