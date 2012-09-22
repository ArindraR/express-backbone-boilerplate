var express = require('express'),
    app = express(),
    path = require('path');

require('./routes/src')(app);
require('./routes/test')(app);
require('./routes/api')(app);

app.listen(3000);
console.log('Carousel app listening on port 3000');