// smtp set
exports.smtp = {
  service: 'gmail',
  auth: {
    user: 'bigbangasq2015@gmail.com',
    pass: 'Studentno1'
  },
  secure: false,
  debug: true
};

// expiration time，ms
exports.registerMaxAge = 3600000 * 24;
