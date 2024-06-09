
import { createConnection } from 'mysql2';

const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'it2b'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao se conectar ao banco de dados: ' + err.stack);
    return;
  }
  console.log('Conectado ao banco de dados.');

});

export default connection;
