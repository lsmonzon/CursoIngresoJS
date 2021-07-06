/*
Monzon,Lucas Sebastian Div H
Ejercicio E/S 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/


const  ID_TXT_NUMBER_SALARY='txtIdSueldo';
const  ID_TXT_NUMBER_RESULT='txtIdResultado';
const  PORCENT_TO_OPER=0.10;

function mostrarAumento()
{
	let salary=0;
	let result=0;

	let objectInputNumberSalary=document.getElementById(ID_TXT_NUMBER_SALARY);
	let objectInputNumberResult=document.getElementById(ID_TXT_NUMBER_RESULT);
	salary=parseInt(objectInputNumberSalary.value);
	result=salary;
	result+=salary*PORCENT_TO_OPER;
	objectInputNumberResult.value=result;	
}	
