/*global config*/

var winston = require('winston');
var fileLocation = config.log.fileLocation;
const tsFormat = () => (new Date());

winston.transports.DailyRotateFile = require('winston-daily-rotate-file');

// Logger initialized
module.exports = new (winston.Logger)({
    transports : [
        new (winston.transports.Console)({ colorize: true }),
        new(require('winston-daily-rotate-file'))({
            filename: fileLocation + '-ReactiveApp.log',
            timestamp: tsFormat,
            datePattern: 'yyyy-MM-dd',
            prepend: true,
            level: 'debug'
        })        
    ]
});