var path = require('path'),
    clientTestPath = path.join(__dirname, '/../../client/test');

module.exports = function (app) {

    app.get('/client/test/*.js', function (req, res) {
        res.sendfile(path.join(clientTestPath, req.params[0] + '.js'));
    });
    
    app.get('/client/test/lib/*', function (req, res) {
        res.sendfile(path.join(clientTestPath, 'lib', req.params[0]));
    });
    
    app.get('/client/test', function (req, res) {
        res.sendfile(path.join(clientTestPath, 'index.html'));
    });

};