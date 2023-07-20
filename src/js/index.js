const inputs = document.querySelectorAll('.input');
const btnEnviar = document.querySelector('.btn');
const labels = document.querySelectorAll('.label');

btnEnviar.addEventListener('click', function (event){
    event.preventDefault();
    inputs.forEach((input) => {
        if(input.value){
            input.classList.remove('padrao', 'campo-nao-preenchido')
            input.classList.add('campo-preenchido')
            input.nextElementSibling.classList.add('esconder')
            input.nextElementSibling.classList.remove('mostrar')
        }else{
            input.classList.remove('padrao', 'campo-preenchido')
            input.classList.add('campo-nao-preenchido')
            input.nextElementSibling.classList.remove('esconder')
            input.nextElementSibling.classList.add('mostrar')
        };
    });
});