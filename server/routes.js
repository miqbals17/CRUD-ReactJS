'use strict'

const controller = require('./controller')

exports.routes = (app) => {
    app.get('/', (req, res) => {
        controller.home(req, res);
    })

    app.get('/kutipan', (req, res) => {
        controller.show(req, res)
    })

    app.post('/kutipan/add', (req, res) => {
        controller.add(req, res);
    })
    
    app.post('/kutipan/edit', (req, res) => {
        controller.edit(req, res);
    })
    
    app.post('/kutipan/delete', (req, res) => {
        controller.del(req, res);
    })
}