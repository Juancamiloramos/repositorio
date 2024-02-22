var salarioActual;
var aumento;
var salarioAjustado;

aumento = parseFloat(aumento);
salarioActual = prompt("ingrese su salario");
salarioActual = parseFloat(salarioActual);
if (salarioActual<1300606) {
    aumento=salarioActual*0.15
} else {
    aumento=0
}
salarioAjustado=salarioActual+aumento;

alert("su salario con el ajuste indicado es " +salarioAjustado);