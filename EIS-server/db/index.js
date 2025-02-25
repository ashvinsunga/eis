const { Pool } = require('pg');
const { user, host, database, password, port} = require('../secrets/db_configuration')
//connection restored


const pool = new Pool({user, host, database, password, port});



module.exports = pool;

