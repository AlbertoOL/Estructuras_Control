function calculaMenor() {
    var num1 = parseInt(document.numMenor.numero1.value);
    var num2 = parseInt(document.numMenor.numero2.value);
    var num3 = parseInt(document.numMenor.numero3.value);

    var menor;

    if (num1 <= num2 && num1 <= num3){
        menor = num1;
    }else if(num2 <= num1 && num2 <= num3){
        menor = num2;
    }else if(num3 <= num1 && num3 <= num2){
        menor = num3;
    }

    document.getElementById('resNumMenor').innerHTML = 'El numero menor es: <b>' + menor + '</b><br>';
}

function ordenaMenorMayor() {
    var num1 = parseInt(document.menorMayor.numero1.value);
    var num2 = parseInt(document.menorMayor.numero2.value);
    var num3 = parseInt(document.menorMayor.numero3.value);
            
    ordena = new Array(num1, num2, num3);
    ordena.sort();

    document.getElementById('resMenorMayor').innerHTML = 'El orden de menor a mayor es: <b>' + ordena + '</b><br>';
}

function calculaPerimetro() {
    var lado = parseInt(document.perimetro.lado.value);
    var perimetro = lado + lado + lado + lado;
    return perimetro;
}

function mostarPerimetro(){
    var dato = calculaPerimetro();
    document.getElementById('resPerimetro').innerHTML = 'El perimetro del cuadrado es: <b>' + dato + '</b><br>';
}

function calculaPromedio() {
    var num1 = parseInt(document.promedio.numero1.value);
    var num2 = parseInt(document.promedio.numero2.value);
    var num3 = parseInt(document.promedio.numero3.value);
            
    promedio = (num1 + num2 + num3) / 3;            
    return promedio;
}

function mostarPromedio(){
    var dato = calculaPromedio();
    document.getElementById('resPromedio').innerHTML = 'El promedio de los tres numeros es: <b>' + dato + '</b><br>';
}

