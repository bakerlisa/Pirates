const UserController = require('../controllers/user.controller');

module.exports = app => {
    app.get('/api/users', UserController.allUsers);
    app.get('/api/login', UserController.loginUsers);
    app.get('/api/user/:id', UserController.singleUser);
    app.post('/api/create/user', UserController.createUser);
    app.delete('/api/delete/user/:id', UserController.deleteUser);
    app.patch('/api/edit/user/:id', UserController.editUser)
}