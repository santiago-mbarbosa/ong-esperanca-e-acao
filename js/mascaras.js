export function configurarMascaraTelefone() {
    const telefone = document.getElementById("telefone");

    if (!telefone) {
        return;
    }

    telefone.addEventListener("input", function () {
        let valor = telefone.value.replace(/\D/g, "");

        if (valor.length > 11) {
            valor = valor.substring(0, 11);
        }

        if (valor.length > 6) {
            valor = valor.replace(
                /^(\d{2})(\d{5})(\d{0,4}).*/,
                "($1) $2-$3"
            );
        } else if (valor.length > 2) {
            valor = valor.replace(
                /^(\d{2})(\d{0,5})/,
                "($1) $2"
            );
        } else if (valor.length > 0) {
            valor = valor.replace(
                /^(\d{0,2})/,
                "($1"
            );
        }

        telefone.value = valor;
    });
}


export function configurarMascaraCep() {
    const cep = document.getElementById("cep");

    if (!cep) {
        return;
    }

    cep.addEventListener("input", function () {
        let valor = cep.value.replace(/\D/g, "");

        if (valor.length > 8) {
            valor = valor.substring(0, 8);
        }

        if (valor.length > 5) {
            valor = valor.replace(
                /^(\d{5})(\d{0,3})/,
                "$1-$2"
            );
        }

        cep.value = valor;
    });
}


export function configurarMascaraCpf() {
    const cpf = document.getElementById("cpf");

    if (!cpf) {
        return;
    }

    cpf.addEventListener("input", function () {
        let valor = cpf.value.replace(/\D/g, "");

        if (valor.length > 11) {
            valor = valor.substring(0, 11);
        }

        if (valor.length > 9) {
            valor = valor.replace(
                /^(\d{3})(\d{3})(\d{3})(\d{0,2}).*/,
                "$1.$2.$3-$4"
            );
        } else if (valor.length > 6) {
            valor = valor.replace(
                /^(\d{3})(\d{3})(\d{0,3})/,
                "$1.$2.$3"
            );
        } else if (valor.length > 3) {
            valor = valor.replace(
                /^(\d{3})(\d{0,3})/,
                "$1.$2"
            );
        }

        cpf.value = valor;
    });
}