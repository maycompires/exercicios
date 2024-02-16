/*Realizar um código para que seja perguntado ao usuário, via prompt, 
o nome ou código de um alimento. Após o código informado, identificar 
o preço deste alimento via switch e mostrá-lo ao usuário. 
Exemplo: morango ou ‘Morango’ como input e a saída mostrar R$ 5,99.
A execução do algoritmo deve ser contínua e o número 0 ou ‘sair’ 
é a flag para parar a execução*/


let nomeProduto = prompt("Digite o Nome do Produto");
let codigoProduto = prompt("Digite o Código do Produto");

switch (nomeProduto) {
    case 'Banana':
    case '01':
        console.log("O Valor da Banana é R$ 5,99");
        break;
    case 'Abacate':
    case '02':
        console.log("O Valor da Abacate é R$ 8,99");
        break;
    case 'Abacaxi':
    case '03':
        console.log("O Valor da Abacaxi é R$ 6,99");
        break;
    default:
        console.log("Nome ou Código do Produto é Inválido");
}