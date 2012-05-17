var fs = require('fs');

process.stdout.write("================================================================================\n");
process.stdout.write("=                                                                              =\n");
process.stdout.write("=                     Log4js-syslog installing appender                        =\n");
process.stdout.write("=                                                                              =\n");
process.stdout.write("================================================================================\n");

//Symlink default strategies
var appender_name = 'syslog';
var modules_path_rel_to_node_modules = '../';
var appenders_path = 'log4js/lib/appenders/';

fs.symlinkSync(fs.realpathSync('./index.js'), modules_path_rel_to_node_modules + appenders_path + appender_name + '.js');

process.stdout.write("Log4js-syslog Install: Finished.\n")
