var dados=[
    {id:1, nome:'Introdução ao PROLOG',Professor: "Mario Pazoti",Data: "10/10/2023",horario:'22:00'},
    {id:2, nome:'Conceitos Básicos em Segurança da Informação',Professor: "Glauco Antonio Ruiz",Data: "11/10/2023",horario:'10:30'},
    {id:3, nome:'Circuitos Avançados',Professor: "Flávio Pandur",Data: "10/10/2023",horario:'13:30'},
    {id:4, nome:'Meu primeiro Compilador',Professor: "Francisco Assis",Data: "10/10/2023",horario:'20:00'}
]
sessionStorage.setItem('dados', JSON.stringify(dados));


function montarTabela(){
    let tbody = document.querySelector('#tb-body');

    let html = '';
    for( let item of dados){
        html+= `<tr>
                  <td><input type="checkbox" 
                          data-id="${item.id}" ></td>
                  <td>${item.nome}</td>
                  <td>${item.Professor}</td>
                  <td>${item.Data}</td>
                  <td>${item.horario}</td>
                  <td><a class="btnExcluir" style="color: black;cursor:pointer" 
                         onclick="excluirItem(${item.id})">&#9746;</a></td>
                </tr> `;
    }
    tbody.innerHTML = html;
}
montarTabela();

function adicionarItem(){
    let nomecurso = document.querySelector('#courseName');
    let professor = document.querySelector('#professorName');
    let data = document.querySelector('#classDate');
    let time = document.querySelector('#classTime');
    let email = document.querySelector('#email');

    const date=new Date(data.value);
    const dataformatada = date.toLocaleDateString("pt-BR");


    let novoItem ={ id: new Date().getTime(),
                    nome: nomecurso.value,
                    Professor:professor.value,
                    Data: dataformatada,
                    horario:time.value}

    dados.push(novoItem);
    montarTabela();
    nomecurso.value = '';
    professor.value='';
    data.value='';
    time.value='';
    email.value='';
    nomecurso.focus();
    sessionStorage.setItem('dados', JSON.stringify(dados));                
}


function excluirItem(pId){
    let dadosAux = []
    for (let i=0; i<dados.length; i++)
       if (dados[i].id != pId)
          dadosAux.push(dados[i]);
    
    dados = dadosAux;
    montarTabela();
    
    sessionStorage.setItem('dados', JSON.stringify(dados));
}
