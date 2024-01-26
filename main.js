const formTelefone = document.getElementById("contatoForm");
const listaTelefonesTabela = document.getElementById("corpoTabela");

let listaTelefones = '';
const nomes =[];
let alertMessage = '';

formTelefone.addEventListener('submit', function(e){
    e.preventDefault();

    const nomeContato = document.getElementById("campoNomeContato");
    const telefone = document.getElementById("campoTelefone");
    
    if(validateName(nomeContato.value)){
        alert(alertMessage);
    } else {
        addNewContact(nomeContato.value, telefone.value);
        /*nomes.push(nomeContato.value);

        linha=`<tr>`;
        linha+=`<td>${nomeContato.value}</td>`;
        linha+=`<td>${telefone.value}</td>`;
        linha+=`</tr>`;
        listaTelefones+=linha;

        listaTelefonesTabela.innerHTML=listaTelefones;*/
    }

    nomeContato.value='';
    telefone.value='';
});

function validateName(name){
    if(name.split(' ').length<2){
        alertMessage="Nome inválido";
        return true;
    } else if(nomes.includes(name)>0){
        alertMessage="Contato já cadastrado";
        return true;
    } else {
        return false;
    }
}

function addNewContact(name, number){
    nomes.push(name);

    linha=`<tr>`;
    linha+=`<td>${name}</td>`;
    linha+=`<td>${number}</td>`;
    linha+=`</tr>`;
    listaTelefones+=linha;

    listaTelefonesTabela.innerHTML=listaTelefones;
}