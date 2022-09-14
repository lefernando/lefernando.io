function soma(){
    var n1 = document.querySelector(".n1").value;
    var n2 = document.querySelector(".n2").value;

    var resultadoSoma = parseInt(n1)+parseInt(n2);
    document.querySelector(".resultadoSoma").innerHTML=resultadoSoma;
}
function subtracao(){
    var n1 = document.querySelector(".n1").value;
    var n2 = document.querySelector(".n2").value;

    var resultadoSubtracao = parseInt(n1)-parseInt(n2);
    document.querySelector(".resultadoSubtracao").innerHTML=resultadoSubtracao;
}
function multiplicacao(){
    var n1 = document.querySelector(".n1").value;
    var n2 = document.querySelector(".n2").value;

    var resultadoMultiplicacao = parseInt(n1)*parseInt(n2);
    document.querySelector(".resultadoMultiplicacao").innerHTML=resultadoMultiplicacao;
}
function divisao(){
    var n1 = document.querySelector(".n1").value;
    var n2 = document.querySelector(".n2").value;

    var resultadoDivisao = parseInt(n1)/parseInt(n2);
    document.querySelector(".resultadoDivisao").innerHTML=resultadoDivisao;
}
function limpar(){
    document.querySelector(".n1").value = '';
    document.querySelector(".n2").value = '';
    document.querySelector(".resultadoSoma").innerHTML = '';
    document.querySelector(".resultadoSubtracao").innerHTML = '';
    document.querySelector(".resultadoMultiplicacao").innerHTML = '';
    document.querySelector(".resultadoDivisao").innerHTML = '';
}
