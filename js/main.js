// const button = document.querySelector('.search-button');
const terminal = document.querySelector('#terminal');
const navigation = document.querySelector('.navigation');
const input = document.getElementById('search-input');
const form = document.querySelector('form');
const typedterm = document.getElementById('typedterm');


let commands = [{
    'command': '--help',
    'message': '\n------\nPÁINEL DE AJUDA\n--help Ajuda \n--call: Meu Numero de Contato\n--techs: Tecnplogias que trabalho\n--whoiam: Quem eu Sou\n--clear or cls: limpar terminal\n'
}, {
    'command': '--call',
    'message': '\nEntre em contato comigo pelo tefone ou email da página\n'
}, {
    'command': '--whoiam',
    'message': '\nDesenvolvedor FullStack \n'
}, {
    'command': '--techs',
    'message': '\nDesenvolvedor FullStack \n'
}, {
    'command': 'clear',
    'message': '\nLimpa o terminal\n'
}, {
    'command': 'cls',
    'message': '\nLimpa o terminal \n'
}]

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let find = false;
    commands.forEach((command) => {
        if (command.command == input.value.trim()) {
            // input.value += command.message;
            if (input.value.trim() == 'clear' || input.value.trim() == 'cls') {
                typedterm.innerText = "alison@aguiar$:\n";
            } else {
                typedterm.innerText += `\n${input.value.trim()}${command.message}`;
            }
            find = true;

        }
    });
    if (find) {} else {
        typedterm.innerText += '\n--> Comando Não Encontrado --help para ajuda';
        this.changeColors();
    }
    input.value = "";

})



function showTerminal() {
    terminal.setAttribute('data-show', null);
    input.focus();
}

function hideTerminal() {
    terminal.removeAttribute('data-show');
}

function toggleTerminal() {
    terminal.toggleAttribute('data-show')

}

const header = document.querySelector('header');

function maximizeContent() {
    header.classList.add('header-hide');
}

function minimizeContent() {
    header.classList.remove('header-hide');
}

function closeContent() {
    this.changeColors();
}

function changeColors() {
    let style = navigation.style;
    let stylebody = document.style;
    navigation.style.background = 'linear-gradient(to bottom, rgb(71 0 0 / 18%), rgb(130 0 0 / 35%))';
    document.documentElement.style.setProperty("--primary", "red");
    document.body.style.color = "var(--primary)";

    setTimeout(() => {
        navigation.style = style;
        document.style = stylebody;
        document.documentElement.style = stylebody;

    }, 1000);
}

function focusTerminal() {
    input.focus();
}


document.body.addEventListener("keydown", function(e) {
    if (e.keyCode === 27) {
        hideTerminal();
    }
});