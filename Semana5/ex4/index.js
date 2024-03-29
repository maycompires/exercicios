const produtos = [
    { nome: 'Arroz', preco: 6.19, codigo: '1' },
    { nome: 'Feijão', preco: 8.99, codigo: '2' },
    { nome: 'Macarrão', preco: 5.40, codigo: '3' },
    { nome: 'Açúcar', preco: 6.79, codigo: '4' },
    { nome: 'Óleo', preco: 9.99, codigo: '5' },
    { nome: 'Sal', preco: 2.90, codigo: '6' },
    { nome: 'Leite', preco: 5.99, codigo: '7' },
    { nome: 'Pão', preco: 7.49, codigo: '8' },
    { nome: 'Café', preco: 16.99, codigo: '9' },
];

let carrinho = [];

function comprarProduto() {
    const nomeProduto = document.getElementById("nomeProduto").value.trim();
    const produtoEncontrado = produtos.find(item => item.nome.toLowerCase() === nomeProduto.toLowerCase());

    if (produtoEncontrado) {
        carrinho.push({ nome: produtoEncontrado.nome, preco: produtoEncontrado.preco });
        alert(`"${produtoEncontrado.nome}" foi adicionado ao carrinho!`);
        document.getElementById("nomeProduto").value = "";
        exibirCarrinho(); // Atualiza o carrinho
    } else {
        alert("Por favor, insira um nome de produto válido.");
    }
}

function calcularTotal() {
    if (carrinho.length === 0) {
        alert("Carrinho vazio");
        return;
    }

    const total = carrinho.reduce((acc, item) => acc + item.preco, 0);
    alert(`Total da compra: R$ ${total.toFixed(2)}`);
}

function consultarValor() {
    const inputCodigoProduto = document.getElementById('codigoProduto').value.trim();
    const inputNomeProduto = document.getElementById('nomeProduto').value.trim();
    let resultado = null;

    if (inputCodigoProduto !== '') {
        resultado = produtos.find(item => item.codigo === inputCodigoProduto);
    }

    if (!resultado && inputNomeProduto !== '') {
        resultado = produtos.find(item => item.nome.toLowerCase() === inputNomeProduto.toLowerCase());
    }

    if (resultado !== null) {
        alert(`O preço do ${resultado.nome} é R$ ${resultado.preco.toFixed(2)}`);
    } else {
        alert('Produto não cadastrado.');
    }
}

function exibirNomeProduto() {
    const inputCodigoProduto = document.getElementById('codigoProduto').value.trim();
    const produtoEncontrado = produtos.find(item => item.codigo === inputCodigoProduto);
    
    if (produtoEncontrado) {
        document.getElementById('nomeProduto').value = produtoEncontrado.nome;
    } else {
        alert("Produto não cadastrado");
    }
}

function exibirCarrinho() {
    const carrinhoHTML = carrinho.map(item => `<li>${item.nome} - R$ ${item.preco.toFixed(2)}</li>`).join('');
    document.getElementById('carrinho').innerHTML = `<h2>Carrinho</h2><ul>${carrinhoHTML}</ul>`;
}
