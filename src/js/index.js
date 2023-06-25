const inputs = document.querySelectorAll('.input');
const btnEnviar = document.querySelector('.btn');
const labels = document.querySelectorAll('.label');

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

    inputs.forEach((input, index) => {
        if(input.value == ''){
            input.classList.remove('padrao')
            input.classList.add('campo-nao-preenchido')
            labels[index].classList.remove('esconder')
            labels[index].classList.add('mostrar')
        };
    });
});