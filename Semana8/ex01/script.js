const estiloH1 = document.getElementById('title');
    estiloH1.style.backgroundColor = 'red';

let estiloClasse = document.querySelector('.minhaClasse');
    estiloClasse.innerHTML = "Alterando texto de um elemento classe";
    estiloClasse.style.color = 'blue';

let elementoCriado = document.createElement('p');
    elementoCriado.appendChild(document.createTextNode('texto de p criado.'));
    container.appendChild(elementoCriado);

let container = document.querySelector("#container");
let p = document.querySelector("#container p");
    container.removeChild(p);