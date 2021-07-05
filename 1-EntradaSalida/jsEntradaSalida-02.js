/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/

const  PROMPT_MESSAGE_INGRESS_NAME='Ingrese su nombre'
const  DEFAULT_VALUE_FOR_NAME='nombre'

function mostrar()
{   let nameEnteredByUser = prompt(PROMPT_MESSAGE_INGRESS_NAME,DEFAULT_VALUE_FOR_NAME);
	alert(nameEnteredByUser);
}

