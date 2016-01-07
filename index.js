var log4js = require('log4js'),
 layouts = log4js.layouts,
  syslog = require('node-syslog');


var levels = {}
levels[log4js.levels.ALL] = syslog.LOG_DEBUG;
levels[log4js.levels.TRACE] = syslog.LOG_DEBUG;
levels[log4js.levels.DEBUG] = syslog.LOG_DEBUG;
levels[log4js.levels.INFO] = syslog.LOG_INFO;
levels[log4js.levels.WARN] = syslog.LOG_WARNING;
levels[log4js.levels.ERROR] = syslog.LOG_ERR;
levels[log4js.levels.FATAL] = syslog.LOG_CRIT;

function getOptions(flags) {
  var opts = 0;
  if (Array.isArray(flags)) {
    for (var i = 0, len = flags.length; i < len; i++) {
      opts = opts | flags[i];
    }
  }
  return opts;
}

function getSyslogLevel(level) {
  return level && levels[level] ? levels[level] : null;
}

function open(config) {
  config = config || {}

  var name = (config.ident || config.name || 'node-syslog') + '',
    optsVal = (syslog.LOG_PID | syslog.LOG_CONS | syslog.LOG_ODELAY),
    facility = syslog.LOG_LOCAL0,
    layout;

  if (config.flags) {
    optsVal = getOptions(config.flags);
  }

  if (config.facility && syslog[config.facility]) {
    facility = syslog[config.facility];
  }

  if (config.layout) {
    layout = layouts.layout(config.layout.type, config.layout);
  }

  // no need to check if it's already open, the lib does that
  syslog.init(name, optsVal, facility);

  return syslogAppender(layout);
}

function syslogAppender(layout) {
  layout = layout || layouts.colouredLayout;
  return function(loggingEvent) {
    var level = getSyslogLevel(loggingEvent.level),
    data = loggingEvent.data;

    if (level) {
      data = layout(loggingEvent);

      syslog.log(level, data);
    }
  };
}

// This is a binding so no context needed for close function
process.on('exit', syslog.close);

exports.name = "syslog";
exports.appender = syslogAppender;
exports.configure = open;
exports.open = open;
exports.close = syslog.close;
