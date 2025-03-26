function pesquisar() {
    let section = document.getElementById('resultados-pesquisa');
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    
    if (campoPesquisa === "") {
        section.innerHTML = "<p class='erro'>Por favor, digite o nome de um produto!</p>";
        return;
    }

    let resultados = "";
    
    for (let dado of dados) {
        if (dado.nome.toLowerCase().includes(campoPesquisa) || dado.descricao.toLowerCase().includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <img src="${dado.imagem}" alt="${dado.nome}">
                    <div class="info">
                        <h2>${dado.nome}</h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Mais Informações</a>
                    </div>
                </div>
            `;
        }
    }

    section.innerHTML = resultados || "<p class='erro'>Nenhum produto encontrado</p>";
}
