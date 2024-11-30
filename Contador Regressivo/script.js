// declarando as variaveis
var display = document.getElementById('time-header');
var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');
var start = document.getElementById('start');
var parar = document.getElementById('stop');
var reset = document.getElementById('reset');

var horaAtual;
var minutoAtual;
var segundoAtual;

var interval

// função para 2 digitos
function twuDigits(digit){
    if(digit < 10){
        return('0' + digit);
    } else{
        return(digit)
    }
}

// for para opções para o select 
for(var i = 0; i <= 60; i++){
    minutos.innerHTML+='<option value ='+i+'>'+i+'</option>';
}

for(var i = 0; i <= 60; i++){
    segundos.innerHTML+='<option value ='+i+'>'+i+'</option>';
}

// função para o cronometro regressivo
start.addEventListener('click', function(){
    minutoAtual = minutos.value
    segundoAtual = segundos.value
    display.childNodes[1].innerHTML = twuDigits(minutoAtual)+":"+twuDigits(segundoAtual);

    interval = setInterval(function(){
        segundoAtual--;

        if(segundoAtual<=0){
            if(minutoAtual>0){
                // decrimento
                minutoAtual--
                // para o segundo começar a contagem regressiva do 59
                segundoAtual=59 
            }else{
                // para mostrar na tela após o fim do tempo
                display.innerHTML = "Tempo Esgotado!";
                display.style.fontSize = "13rem"
                display.style.color = "#FFD700"
                display.style.textAlign = "center"
                clearInterval(interval)
            }
            
        }
        // exibir na tela
        display.childNodes[1].innerHTML = twuDigits(minutoAtual)+":"+twuDigits(segundoAtual);
        // tempo milisegundos
    }, 1000);
});

// função para stop
parar.addEventListener('click',function(){
    window.clearTimeout(interval)
    // remaining -= new Data() - start
    // clearInterval(interval)
});

// função para reset
reset.addEventListener('click', function(){
    clearTimeout(interval);
    display.innerText =  '00:00';
    display.style.fontSize = "23rem"
    display.style.color = '#fff'
})