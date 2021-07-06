/*
Monzon,Lucas Sebastian Div H
Ejercicio E/S 3
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

const  PREFIX_MESSAGE_DISPLAY_NAME='Su nombre es';
const ID_TXT_NAME_INPUNT='txtIdNombre';
function mostrar()
{
	
	let nameEnteredByUser;
	nameEnteredByUser=document.getElementById(ID_TXT_NAME_INPUNT).value;
	alert(`${PREFIX_MESSAGE_DISPLAY_NAME} ${nameEnteredByUser}`);

}


