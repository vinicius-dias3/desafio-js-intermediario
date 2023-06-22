const inputs = document.querySelectorAll('.input');
const btnEnviar = document.querySelector('.btn');

inputs.forEach(input => {
    input.addEventListener('change', () =>{
        if (input.value != ''){
            input.classList.remove('padrao')
            input.classList.add('campo-preenchido')
        };
    });
});

btnEnviar.addEventListener('click', function (event){
    event.preventDefault();

    inputs.forEach(input => {
        if(input.value == ''){
            mostrarLabel();
            adicionarCampoNaoPreenchido();
        };
    });
});

function mostrarLabel (){
    const labels = document.querySelectorAll('.label');
    inputs.forEach(input => {
        if(input.value == ''){
            labels.forEach(label =>{
                label.classList.remove('esconder')
                label.classList.add('mostrar')
            });
        };
    });
};

function adicionarCampoNaoPreenchido (){
    inputs.forEach(input => {
        if(input.value == ''){
            input.classList.remove('padrao')
            input.classList.add('campo-nao-preenchido')
        }
    });
};