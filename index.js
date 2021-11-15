function escopoFormulario() {
    const form = document.querySelector('.formulario');
    const mostraImc = document.querySelector('.resultadoImc');

    function bloquearBrowser (bloqueio) {
        bloqueio.preventDefault();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const resultado = peso.value / Math.pow(altura.value, 2);

        console.log(resultado);
        
        mostraImc.innerHTML = `<h1>Seu IMC é: ${resultado}</h1>`;

        
    }    

    form.addEventListener('submit', bloquearBrowser);    
    
}

escopoFormulario();