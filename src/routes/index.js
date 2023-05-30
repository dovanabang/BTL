
const adminRouter = require('./admin');
const siteRouter = require('./site');
const cosoRouter = require('./coso');
const dailyRouter = require('./daily');
const baohanhRouter = require('./baohanh');

function route(app) {
    
    app.use('/admin', adminRouter);
    app.use('/baohanh', baohanhRouter);
    app.use('/coso', cosoRouter);
    app.use('/daily', dailyRouter);      
    app.use('/', siteRouter);


} 

module.exports = route;