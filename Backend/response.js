'use strict'

exports.connected = (req, res) => {
    var data = {
        status: 200,
        req: req
    }

    res.json(data);
    res.end();
}