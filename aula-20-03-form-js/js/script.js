/* CONST define a variavel como constante (não pode ser alterada,
     nesse caso, não pode trocar de elemento no html) */ 

/* document.getElementById('elementoHTML') pega um elemento html pelo id
    para ser programado no js */ 

const form = document.getElementById('formTarefa');
const input = document.getElementById('inputTarefa');
const lista = document.getElementById('listaTarefas');

/* addEventListener adiciona uma "escuta" a um
evento do elemento html.
'submit' é o evento que ocorre quando o formulário é enviado.
function(event) cria a função que será executada quando o evento ocorrer.
event é a variável que armazena as informações do evento que ocorreu. */

form.addEventListener('submit', function(event) {
    //Evita que o formulário seja enviado e a pagina recarregada.*/
    event.preventDefault();

    // armazena o valor do input na variavel
    // trim() remove os espaços em branco do começo e do fim do texto

    const textoTarefa = input.value.trim();

    if(textoTarefa != ''){
        // cria um elemento html do tipo li
        const li = document.createElement('li');
        // add o texto do input no elemento li
        li.textContent = textoTarefa;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'X';
        // Add a classe remover ao botão criado
        botaoRemover.classList.add('remover');

        botaoRemover.addEventListener('click', function() {
            // remove o elemento li da lista se o botão for clicado
            lista.removeChild(li);
        });

        // add o botão remover ao elemento li
        li.appendChild(botaoRemover);

        // add o elemento li a lista de tarefas
        lista.appendChild(li);

        // limpa o valor do input
        input.value = '';
    }
});