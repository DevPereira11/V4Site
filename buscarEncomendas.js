document.getElementById('buscarEncomendas').addEventListener('click', function() {
    fetch('http://localhost:3000/encomendas')
      .then(response => response.json())
      .then(data => {
        const tbody = document.querySelector('table.excel-table tbody');
        tbody.innerHTML = ''; // Limpa as linhas existentes
  
        data.forEach(encomenda => {
          const tr = document.createElement('tr');
          tr.classList.add('cliente');
  
          const tdNome = document.createElement('td');
          tdNome.classList.add('nome');
          tdNome.textContent = encomenda.nome;
  
          const tdProduto = document.createElement('td');
          tdProduto.classList.add('produto');
          tdProduto.textContent = encomenda.produto;
  
          const tdQtde = document.createElement('td');
          tdQtde.classList.add('qtde');
          tdQtde.textContent = encomenda.qtde;
  
          const tdValorUnitario = document.createElement('td');
          tdValorUnitario.classList.add('valorUnitario');
          tdValorUnitario.textContent = encomenda.valorUnitario;
  
          const tdValorTotal = document.createElement('td');
          tdValorTotal.classList.add('valorTotal');
          tdValorTotal.textContent = encomenda.qtde * encomenda.valorUnitario;
  
          tr.appendChild(tdNome);
          tr.appendChild(tdProduto);
          tr.appendChild(tdQtde);
          tr.appendChild(tdValorUnitario);
          tr.appendChild(tdValorTotal);
  
          tbody.appendChild(tr);
        });
      })
      .catch(error => console.error('Erro ao buscar encomendas:', error));
  });
  