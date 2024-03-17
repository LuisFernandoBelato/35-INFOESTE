async function buscaCep()
{

  cep = document.getElementById("CEP").value
  
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  const Dados = await response.json();
  if (Dados.error)
    document.getElementById("CEP").value = "Algo Deu Errado no Processo";
  else
  {
    document.getElementById("BAIRRO").value = Dados.bairro
    document.getElementById("RUA").value = Dados.logradouro

  }
}
