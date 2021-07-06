/*
Monzon,Lucas Sebastian Div H
Ejercicio E/S 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/


const  ID_TXT_NUMBER_AMOUNT='txtIdImporte';
const  ID_TXT_NUMBER_RESULT='txtIdResultado';
const  PORCENT_TO_OPER=0.25;
function mostrarAumento()
{
	let amount=0;
	let result=0;

	let objectInputNumberAmount=document.getElementById(ID_TXT_NUMBER_AMOUNT);
	let objectInputNumberResult=document.getElementById(ID_TXT_NUMBER_RESULT);
	amount=parseInt(objectInputNumberAmount.value);
	result=amount;
	result-=amount*PORCENT_TO_OPER;
	objectInputNumberResult.value=result;	
}
