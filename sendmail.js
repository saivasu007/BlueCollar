var path = require('path');
var fs  = require('fs');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var ejs = require('ejs');
var config = require('./config');

console.log(config.smtp);

var transporter = nodemailer.createTransport(smtpTransport(config.smtp));


function renderTemplate (name, data) {
  var tpl = fs.readFileSync(path.resolve(__dirname+"/views/", 'templates', name + '.html')).toString();
  return ejs.render(tpl, data);
}


// options: from, to, subject, template, data
module.exports = function (options, callback) {
  console.log(options);
  return transporter.sendMail({
    from: options.from,
    to: options.to,
    subject: options.subject,
    html: renderTemplate(options.template, options.data)
  }, callback);
};
