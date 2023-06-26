const mysql = require('mysql2')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')


//getAll users
const list = (req, res) => {
  // SELECT ALL USERS
  pool.query("SELECT * FROM users", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const show = (req, res) => {
  // SELECT USERS WHERE ID = <REQ PARAMS ID>
  let sql = "QUERY GOES HERE"
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, [])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const create = (req, res) => {
  // INSERT INTO USERS FIRST AND LAST NAME 
  let sql = "QUERY GOES HERE"
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, [])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}
 

// const updateUserById = (req, res) => {
//   // UPDATE USERS AND SET FIRST AND LAST NAME WHERE ID = <REQ PARAMS ID>
//   let sql = ""
//   // WHAT GOES IN THE BRACKETS
//   sql = mysql.format(sql, [])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.status(204).json();
//   })
// }

// const deleteUserByFirstName = (req, res) => {
//   // DELETE FROM USERS WHERE FIRST NAME = <REQ PARAMS FIRST_NAME>
//   let sql = ""
//   // WHAT GOES IN THE BRACKETS
//   sql = mysql.format(sql, [])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
//   })
// }

module.exports = {
  list,
  show,
  create,
  // createUser,
  // updateUserById,
  // deleteUserByFirstName
}