export function salvarCadastro(cadastro) {
    localStorage.setItem("cadastroONG", JSON.stringify(cadastro));
}

export function carregarCadastro() {
    const dadosSalvos = localStorage.getItem("cadastroONG");

    if (!dadosSalvos) {
        return null;
    }

    return JSON.parse(dadosSalvos);
}