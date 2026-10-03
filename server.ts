import { createServer } from 'node:http';

createServer(function (request, response) {
    console.log('A requisição chegou em ' + request.url + 'e com o método ' + request.method);
    if (request.url === '/api/heath' && request.method === 'GET') {
        response.writeHead(
            200,
            { 'content-type': 'application/json' }
        );
        response.end(JSON.stringify({success: {
            status: 200,
            message: 'Ok.'
        }}));
        
        return;
    }

    response.writeHead(
        404,
        { 'content=type': 'application/json' }
    );
    response.end(JSON.stringify({error: {
        status: 404,
        message: 'Recurso não encontrado.'
    }}));
}).listen(3000);