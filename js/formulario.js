import { salvarCadastro } from "./armazenamento.js";

export function configurarFormulario() {
    const formulario = document.getElementById("form-cadastro");

    if (!formulario) {
        return;
    }

    const toast = formulario.querySelector(".toast");

    formulario.addEventListener("input", function () {
        if (formulario.checkValidity()) {
            toast.style.display = "block";
        } else {
            toast.style.display = "none";
        }
    });

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        const dados = new FormData(formulario);
        const cadastro = Object.fromEntries(dados.entries());

        salvarCadastro(cadastro);

        alert("Cadastro salvo com sucesso!");
    });
}