const app = document.getElementById("app");

const paginas = {
    inicio: `
        <section>
            <h2>Sobre a ONG</h2>

            <img
                src="../imagens/ong1.png"
                alt="Voluntários da ONG realizando uma ação comunitária"
            >

            <p>
                A ONG Esperança e Ação desenvolve iniciativas
                sociais voltadas para a comunidade.
            </p>
        </section>
    `,

    projetos: `
        <section>
            <h2>Campanhas de doação</h2>

            <span class="badge">Campanha ativa</span>

            <p>
                A ONG conduz campanhas para arrecadar recursos
                destinados à manutenção e ampliação de suas ações sociais.
            </p>

            <ul>
                <li>Contribuições financeiras para projetos sociais;</li>
                <li>Campanhas de arrecadação em períodos específicos;</li>
                <li>Informações sobre formas de contribuição.</li>
            </ul>
        </section>

        <section>
            <h2>Voluntariado</h2>

            <p>
                As atividades de voluntariado permitem que pessoas
                interessadas contribuam com tempo e trabalho nas
                iniciativas da organização.
            </p>

            <ul>
                <li>Apoio em atividades comunitárias;</li>
                <li>Participação em campanhas;</li>
                <li>Colaboração em ações de atendimento e inclusão.</li>
            </ul>

            <p>
                <a
                    href="#cadastro"
                    data-page="cadastro"
                    class="projeto-link"
                >
                    Quero participar
                </a>
            </p>
        </section>
    `,

    cadastro: `
        <section>
            <h2>Cadastro</h2>

            <div class="alerta">
                <strong>Importante:</strong>
                confira seus dados antes de enviar o cadastro.
            </div>

            <form id="form-cadastro">

                <fieldset>
                    <legend>Dados pessoais</legend>

                    <label for="nome">Nome completo:</label>
                    <input type="text" id="nome" name="nome" required>

                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="nascimento">Data de nascimento:</label>
                    <input type="date" id="nascimento" name="nascimento">

                    <label for="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        placeholder="000.000.000-00"
                        required
                    >

                    <label for="telefone">Telefone:</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                        placeholder="(79) 99999-9999"
                        required
                    >
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>

                    <label for="endereco">Endereço:</label>
                    <input type="text" id="endereco" name="endereco" required>

                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" required>

                    <label for="estado">Estado:</label>
                    <input type="text" id="estado" name="estado" required>

                    <label for="cep">CEP:</label>
                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        pattern="[0-9]{5}-[0-9]{3}"
                        placeholder="00000-000"
                        required
                    >
                </fieldset>

                <fieldset>
                    <legend>Participação</legend>

                    <label for="participacao">
                        Como deseja participar?
                    </label>

                    <select
                        id="participacao"
                        name="participacao"
                        required
                    >
                        <option value="">Selecione uma opção</option>
                        <option value="voluntario">Voluntariado</option>
                        <option value="doador">Doador</option>
                        <option value="campanhas">Campanhas</option>
                    </select>
                </fieldset>

                <button type="submit" class="button">
                    Enviar cadastro
                </button>

                <div class="toast" role="status" style="display: none;">
                    Cadastro pronto para envio.
                </div>

            </form>
        </section>
    `
};

export function renderizarPagina(pagina) {
    app.innerHTML = paginas[pagina];
}