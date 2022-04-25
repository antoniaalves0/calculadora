function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML ; // criamos a variavel numero
    document.getElementById('resultado').innerHTML = numero + num ; //vai pegar no paragrafo 'resultado' o que ja tem  e colocar o numero que esta vindo no nosso parametro

}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML; // criamos uma variavel resultado 
    document.getElementById('resultado').innerHTML = resultado.substring (0, resultado.length - 1); //vai pegar todos os nossos caracteres que nós temos nessa calculadora e vai diminuir 1
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML; // criou uma variavel 
    if (resultado) { //se tiver coisa dentro do paragrafo "resultado"
        document.getElementById('resultado').innerHTML = eval(resultado) //eval vai computar a nossa operaçao
    }
    else{ // se nao tiver:
        document.getElementById('resultado').innerHTML = 'Nada...' ;
    }
}