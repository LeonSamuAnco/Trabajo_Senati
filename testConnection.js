const db = require('./db');

(async () => {
    try {
        const result = await db.query('select * from usuario'); 
        console.log('Conexión exitosa. Fecha y hora actuales:', result.rows[0]);
    } catch (error) {
        console.error('Error en la conexión:', error);
    }
})();
