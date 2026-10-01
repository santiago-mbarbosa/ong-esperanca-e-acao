// Ponto de entrada do JavaScript da aplicação.
// As funcionalidades interativas da Experiência Prática III
// serão organizadas e implementadas neste arquivo e em módulos futuros.


import { renderizarPagina } from "./navegacao.js";
import {
    configurarMascaraTelefone,
    configurarMascaraCep,
    configurarMascaraCpf
} from "./mascaras.js";
import { configurarFormulario } from "./formulario.js";
import { carregarCadastro } from "./armazenamento.js";

document.addEventListener("click", function (evento) {
    const link = evento.target.closest("a[data-page]");

    if (!link) {
        return;
    }

    evento.preventDefault();

    const pagina = link.dataset.page;

    renderizarPagina(pagina);

    configurarMascaraTelefone();
    configurarMascaraCep();
    configurarMascaraCpf();
    configurarFormulario();

    if (pagina === "cadastro") {
        const cadastro = carregarCadastro();

        if (cadastro) {
            Object.keys(cadastro).forEach(function (campo) {
                const elemento = document.getElementById(campo);

                if (elemento) {
                    elemento.value = cadastro[campo];
                }
            });
        }
    }
});

renderizarPagina("inicio");