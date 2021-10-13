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

function calculaNumDigitos(){
    var num1 = document.numDigitos.numero1.value;
    return num1.length;
}

function mostarNumDigitos(){
    var dato = calculaNumDigitos();
    document.getElementById('resNumDigitos').innerHTML = 'La cantidad de dígitos que tiene una variable es: <b>' + dato + '</b><br>';
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

function sumaValores(){
    var valor1 = parseInt(prompt('Ingrese el primer valor: ',''));
    var valor2 = parseInt(prompt('Ingrese el segundo valor: ', ''));
    var valor3 = parseInt(prompt('Ingrese el tercer valor: ', ''));
    var valor4 = parseInt(prompt('Ingrese el cuarto valor: ', ''));
    var valor5 = parseInt(prompt('Ingrese el quinto valor: ', ''));

    suma = valor1 + valor2 + valor3 + valor4 + valor5;
    return suma;
}

function mostrarSumaVal(){
    var dato = sumaValores();
    document.getElementById('resSumaVal').innerHTML = 'La suma de los 5 valores es: <b>' + dato + '</b><br>';
}