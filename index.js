const exec = (require('child_process').exec);
const port = process.env.PORT;

exec('HTTPSERVER_PORT=${port} HTTPSERVER_HOST=0.0.0.0 npx httpserver');
