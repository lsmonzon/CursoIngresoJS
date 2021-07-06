/*
Monzon,Lucas Sebastian Div H
Ejercicio E/S 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

const  PREFIX_MESSAGE_DISPLAY_SUM='La suma es';


const  ID_TXT_NUMBER_ONE='txtIdNumeroUno';
const  ID_TXT_NUMBER_TWO='txtIdNumeroDos';

function sumar()
{   let numberOne=0;
	let numberTwo=0;
	let sum=0;
	let objectInputNumberOne=document.getElementById(ID_TXT_NUMBER_ONE);
	let objectInputNumberTwo=document.getElementById(ID_TXT_NUMBER_TWO);
	numberOne=parseInt(objectInputNumberOne.value);
	numberTwo=parseInt(objectInputNumberTwo.value);
	sum=numberOne+numberTwo;
	alert(`${PREFIX_MESSAGE_DISPLAY_SUM} ${sum}`);
}

