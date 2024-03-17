//import { dadosTeste } from '/assets/js/cadastro.js';

/*fetch('assets/js/cadastro.js')
.then(response => {
  if (!response.ok) {
    throw new Error('Erro ao carregar o arquivo');
  }
  return response.text();
})
.then(text => {
  // Envolvendo o texto do arquivo em uma função para poder acessar os dados do cadastro.js
  const scriptFunction = new Function(text);
  scriptFunction(); // Executando o código do cadastro.js
  const { meuArray } = window; // Acessando o array do cadastro.js que foi definido globalmente

  // Manipular o array retornado
  for( let item of meuArray){
    console.log(item.nome);
  console.log(meuArray); // Aqui você pode usar o array retornado como quiser
}})
.catch(error => {
  alert('Erro:', error);
});*/

    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var maxChecked = 2;

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            var checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            if (checkedCheckboxes.length > maxChecked) {
                this.checked = false;
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
      var arrayRecebido = JSON.parse(sessionStorage.getItem('dados'));
      montaopc();
    });
    var html = '';
    
    function montaopc() {
      for (let item of dados) {
        console.log(item.nome);
        html += `<div class='checkbox-group'>
                    <input type='checkbox' name='option[]' value='opcao1' id='opcao1'>
                    <label for='opcao1'>${item.nome} - ${item.Professor}</label><br>
                 </div>`;
      }
      document.getElementById('opcurso').innerHTML += html;
      
  }