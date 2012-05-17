var fs = require('fs');

process.stdout.write("================================================================================\n");
process.stdout.write("=                                                                              =\n");
process.stdout.write("=                     Log4js-syslog installing appender                        =\n");
process.stdout.write("=                                                                              =\n");
process.stdout.write("================================================================================\n");

//Symlink default strategies
var appender_name = 'syslog';
var modules_path_rel_to_appenders = '../node_modules';
var appenders_path = '/log4js/lib/appenders/strategies';

fs.symlinkSync('./index.js', modules_path_rel_to_appenders + appenders_path+'/' + appender_name + '.js');

process.stdout.write("Log4js-syslog Install: Finished.\n")
