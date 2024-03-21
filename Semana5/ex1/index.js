const produto = [
    {nome : 'Arroz', Preço : '6.19', codigo : '1'},
    {nome : 'Feijão', Preço : '8.99', codigo : '2'},
    {nome : 'Macarrão', Preço : '5.40', codigo : '3'},
    {nome : 'Açúcar', Preço : '6.79', codigo : '4'},
    {nome : 'Óleo', Preço : '9.99', codigo : '5'},
    {nome : 'Sal', Preço : '2.90', codigo : '6'},
    {nome : 'Leite', Preço : '5.99', codigo : '7'},
    {nome : 'Pão', Preço : '7.49', codigo : '8'},
    {nome : 'Café', Preço : '16.99', codigo : '9'},
]

function consultarValor() {
    let inputCodigoProduto = document.getElementById('codigoProduto').value;
    let inputNomeProduto = document.getElementById('nomeProduto').value;
    let resultado = null;

    if (inputCodigoProduto !== '') {
        resultado = produto.find(item => item.codigo === inputCodigoProduto);
    }

    if (!resultado && inputNomeProduto !== '') {
        resultado = produto.find(item => item.nome.toLowerCase() === inputNomeProduto.toLowerCase());
    }

    if (resultado !== null) {
        alert(`O preço do ${resultado.nome} é R$ ${resultado.Preço}`);
    } else {
        alert('Produto não encontrado.');
    }
}

function exibirNomeProduto() {
    let inputCodigoProduto = document.getElementById('codigoProduto').value;
    
    let produtoEncontrado = produto.find(item => item.codigo === inputCodigoProduto);
    
    if (produtoEncontrado) {
        document.getElementById('nomeProduto').value = produtoEncontrado.nome;

    } else {
        alert ("Produto não cadastrado");
    }
}
