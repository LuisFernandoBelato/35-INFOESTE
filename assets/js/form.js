const flag=1;

window.addEventListener('load', () => {
  if(flag==0){
    document.getElementById('verifica').style.display='none';
    document.getElementById('verifica').innerHTML+='<h1>USUARIO NÃO ESTÁ LOGADO</h1>'
    alert('Usuario nao logado');
    window.location.href = "login.html";

  }
});
