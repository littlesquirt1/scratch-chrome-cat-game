const exec = (require('child_process').exec);
const port = process.env.PORT;

exec('HTTPSERVER_PORT=${port} HTTPSERVER_HOST=127.0.0.1 npx httpserver');
