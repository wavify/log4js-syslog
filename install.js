var fs = require('fs');

process.stdout.write("================================================================================\n");
process.stdout.write("=                                                                              =\n");
process.stdout.write("=                     Log4js-syslog installing appender                        =\n");
process.stdout.write("=                                                                              =\n");
process.stdout.write("================================================================================\n");

//Symlink default strategies
var appender_name = 'syslog';
<<<<<<< HEAD
var path_rel_to_node_modules = '../';
var appenders_path = 'log4js/lib/appenders/';
var appenders_path_rel_to_node_modules = "../../../";

fs.symlinkSync(appenders_path_rel_to_node_modules + 'log4js-syslog' + './index.js', path_rel_to_node_modules + appenders_path + appender_name + '.js');
=======
var modules_path_rel_to_node_modules = '../';
var appenders_path = 'log4js/lib/appenders/';

fs.symlinkSync(fs.realpathSync('./index.js'), modules_path_rel_to_node_modules + appenders_path + appender_name + '.js');
>>>>>>> 2e82f9ef43e9b9540ec86b14944d6ed69b32d56b

process.stdout.write("Log4js-syslog Install: Finished.\n")
