'use strict'

const connection = require('./database');
const resp = require('./response')

exports.home = (req, res) => {
    resp.connected("API Connected!", res)
}

exports.add = (req, res) => {
    let nama = req.body.nama
    let quote = req.body.quote

    connection.query('INSERT INTO kutipan (nama, quote) VALUES (?, ?)', [nama,quote], (err, rows) => {
        if (err) {
            throw err;
        } else {
            resp.connected("Successfull Add Data", res)
        }
    })
}