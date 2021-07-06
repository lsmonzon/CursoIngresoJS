/*
Monzon,Lucas Sebastian Div H
Ejercicio E/S 5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
const  PREFIX_MESSAGE_DISPLAY_NAME='Usted se llama';
const  PREFIX_MESSAGE_DISPLAY_AGE='y tiene';
const  SUFIX_MESSAGE_DISPLAY_AGE='años';

const  ID_TXT_NAME_INPUNT='txtIdNombre';
const  ID_TXT_AGE_INPUNT='txtIdEdad';

function mostrar()
{ 
  let objectInputName=document.getElementById(ID_TXT_NAME_INPUNT);
  let objectInputAge=document.getElementById(ID_TXT_AGE_INPUNT);
   
  alert(`${PREFIX_MESSAGE_DISPLAY_NAME} ${objectInputName.value} ${PREFIX_MESSAGE_DISPLAY_AGE} ${objectInputAge.value} ${SUFIX_MESSAGE_DISPLAY_AGE} `)	
}
