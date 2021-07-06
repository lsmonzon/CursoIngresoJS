/*
Monzon,Lucas Sebastian Div H
Ejercicio E/S 8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
const  PREFIX_MESSAGE_DISPLAY_REST='El resto es';


const  ID_TXT_NUMBER_DIVIDING='txtIdNumeroDividendo';
const  ID_TXT_NUMBER_DIVIDER='txtIdNumeroDivisor';

function SacarResto()
{
	let dividing=0;
	let divider=0;
	let rest=0;
	let objectInputNumberDividing=document.getElementById(ID_TXT_NUMBER_DIVIDING);
	let objectInputNumberDivider=document.getElementById(ID_TXT_NUMBER_DIVIDER);
	dividing=parseInt(objectInputNumberDividing.value);
	divider=parseInt(objectInputNumberDivider.value);
	rest=dividing%divider;
	alert(`${PREFIX_MESSAGE_DISPLAY_REST} ${rest}`);
}
