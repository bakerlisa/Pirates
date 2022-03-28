const PirateController = require('../controllers/priate.controller');

module.exports = app => {
    app.get('/api/pirates', PirateController.allPirates);
    app.get('/api/pirate/:id', PirateController.singlePirate);
    app.post('/api/create/pirate', PirateController.createPirate);
    app.delete('/api/delete/pirate/:id', PirateController.deletePirate);
    app.patch('/api/edit/pirate/:id', PirateController.editPirate)
    app.get('/api/pirate/captain', PirateController.FindCaptainPirate)
}