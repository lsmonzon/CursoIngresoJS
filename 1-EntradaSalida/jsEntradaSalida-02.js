/*
Monzon,Lucas Sebastian Div H
Ejercicio E/S 2
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/

const  PROMPT_MESSAGE_INGRESS_NAME='Ingrese su nombre';
const  DEFAULT_VALUE_FOR_NAME='';
const  PREFIX_MESSAGE_DISPLAY_NAME='Su nombre es';


function mostrar()
{   let nameEnteredByUser=DEFAULT_VALUE_FOR_NAME;
	nameEnteredByUser= prompt(PROMPT_MESSAGE_INGRESS_NAME,DEFAULT_VALUE_FOR_NAME);

	alert(`${PREFIX_MESSAGE_DISPLAY_NAME} ${nameEnteredByUser}`);
}

