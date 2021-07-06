/*
Monzon,Lucas Sebastian Div H
Ejercicio E/S 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
let objectInputNumberOn;
let objectInputNumberTwo;
let numberOne=0;
let numberTwo=0;
let result=0;
const  ID_TXT_NUMBER_ONE='txtIdNumeroUno';
const  ID_TXT_NUMBER_TWO='txtIdNumeroDos';
const  PREFIX_MESSAGE_DISPLAY_SUM='La suma es';
const  PREFIX_MESSAGE_DISPLAY_REST='La resta es';
const  PREFIX_MESSAGE_DISPLAY_MULT='La multiplicacion es';
const  PREFIX_MESSAGE_DISPLAY_DIV='La division es';


function sumar()
{	
	getNumbers();
	result=numberOne+numberTwo;
	alert(`${PREFIX_MESSAGE_DISPLAY_SUM} ${result}`);
}

function restar()
{
	getNumbers();
	result=numberOne-numberTwo;
	alert(`${PREFIX_MESSAGE_DISPLAY_REST} ${result}`);
}


function multiplicar()
{ 
	getNumbers();
	result=numberOne*numberTwo;
	alert(`${PREFIX_MESSAGE_DISPLAY_MULT} ${result}`);
}


function dividir()
{
	getNumbers();
	result=numberOne/numberTwo;
	alert(`${PREFIX_MESSAGE_DISPLAY_DIV} ${result}`);
}


function getNumbers()
{  	
	objectInputNumberOne=document.getElementById(ID_TXT_NUMBER_ONE);
	objectInputNumberTwo=document.getElementById(ID_TXT_NUMBER_TWO);
	numberOne=parseInt(objectInputNumberOne.value);
	numberTwo=parseInt(objectInputNumberTwo.value);

}