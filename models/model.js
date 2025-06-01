const { db } = require('../config/db');

function createContact(data, callback) {
  const { nom, prenom, email, message } = data;
  const sql = `
    INSERT INTO contacts (nom, prenom, email, message)
    VALUES (?, ?, ?, ?)
  `;
  db.query(sql, [nom, prenom, email, message], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
}

module.exports = {
  createContact
};
