const http = require('http'); //foi criado uma constante chamada http. 
//Estou dando Require dizendo que preciso do http pra ligar o servidor.

const hostname = '127.0.0.1'; // constante para definir o endereço local (localhost). Esse servidor criado será acessível somente para o próprio computador, não por outras máquinas.
// o ip 127.0.0.1 é o endereço padrão.

const port = 3000; // Define a porta que o servidor vai "escutar". 3000 é uma porta que serve como um canal de comunicação para o servidor. 

const server = http.createServer((req,res) => { // http.createServer esse método cria um servidor básico.
// (req, res) => {...} é tipo um Callback, uma ação que será executada toda vez que o servidor receber uma solicitação (Request)
// enquanto o req é Request (solicitação), o res é a Response (resposta) que o servidor enviará de volta.	
	res.statusCode = 200; // Define o código de status que significa que se aparecer 200 quer dizer que a solicitação foi bem sucedida.
	res.setHeader('Content-Type','text/plain'); // Define o conteúdo que será enviado como resposta, ou seja, informa ao navegador que o que ele vai receber é apenas um texto comum (Content-Type é um etiqueta, e o Text/Plain é apenas um texto, sem formatação, não é html ou outro formato)
	res.end('Ola do Nathan'); // O res.end diz ao servidor que ele terminou de processar e pode enviar a resposta de volta para o cliente (navegador). No caso aqui a responsa é "Ola de Nathan" que será enviada para o cliente.

});

server.listen(port,hostname, () => { // esse método "liga" o servidor, fazendo com que ele comece a escutar as requisições feitas para o hostname(endereço 127.0.0.1) e a porta (3000).
	console.log("servidor rodando") // O console.log é a chamada para enviar a mensagem "servidor rodando" quando o servidor começar a rodar.

})