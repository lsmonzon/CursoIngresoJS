/* 
Monzon,Lucas Sebastian Div H
Ejercicio E/S 4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

const  PROMPT_MESSAGE_INGRESS_NAME='Ingrese su nombre';
const  DEFAULT_VALUE_FOR_NAME='';
const  PREFIX_MESSAGE_DISPLAY_NAME='Su nombre es';
const  ID_TXT_NAME_INPUNT='txtIdNombre';

function mostrar()
{ let nameEnteredByUser=DEFAULT_VALUE_FOR_NAME;
  let objectInputName=document.getElementById(ID_TXT_NAME_INPUNT);
  
  nameEnteredByUser= prompt(PROMPT_MESSAGE_INGRESS_NAME,DEFAULT_VALUE_FOR_NAME);
  objectInputName.value=`${PREFIX_MESSAGE_DISPLAY_NAME} ${nameEnteredByUser}`;
	
}

