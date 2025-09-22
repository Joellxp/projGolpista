const db = require('../db/database');

const UsuarioModel = {
    create: (nome, idade, turma, callback) => {
        db.run("INSERT INTO usuarios (nome, idade, turma) VALUES (?, ?, ?)",
        [nome, idade, turma], function (err) {
            callback(err, { id: this.lastID, nome, idade, turma });
        });
    }
};

module.exports = UsuarioModel;