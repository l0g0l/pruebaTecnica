const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectionLimit: 5,
  port: process.env.DB_PORT,
  checkDuplicate: false, // mariadb daba este error porque le aparecía como duplicado en las 2 tablas el ID
  database: 'gardenshop'
});


exports.getProducts = async (req, res) => {
  console.log('hola');// con esto veo que la ruta /api/product relaciona app con products que a su vez está relacionado con mySQL (getProducts), de esta manera el código está más claro y refactorizado
  let conn
  try {
    conn = await pool.getConnection();  // Conexión a la base de datos
    let response = await conn.query(`SELECT * FROM products`)
    res.json(response) // transforma los datos que vienen de la BBDD en json

  } catch (err) {
    console.log(err)
    res.json(err); // para poder ver los posibles errores en formato json
  } finally { // Tanto si se ejecuta el try como el catch, se ejecuta el finally, siempre se ejecuta
    if (conn) conn.end();
    res.end()  // cierro petición del navegador
  }

}


exports.getProductsDetails = async (req, res) => {
  
  let id = req.params.id;
  let conn;
  try {
    conn = await pool.getConnection();
    let response = await conn.query(`SELECT products.*, manufc.* FROM products INNER JOIN manufc ON products.manufc_ID = manufc.ID WHERE products.ID = ?`, [id])
    res.json(response) 

  } catch (err) {
    console.log(err)
    res.json(err); 
  } finally { 
    if (conn) conn.end();
    res.end()
  }

}



