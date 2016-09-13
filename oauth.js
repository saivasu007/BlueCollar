var ids = {
  facebook: {
    clientID: '1598117983823240',
    clientSecret: '62c7b61da6b42ddb39efea8b25462d8c',
    callbackURL: 'http://www.bluecollarhunt.com/auth/facebook/callback'
  },
  google: {
    clientID: '1003631882203-h39iko7mudtca2h2mmqjpi1ekpac8q6s.apps.googleusercontent.com',
    clientSecret: 'KWuXkAMVlf4aXuuXrYTK8cC0',
    returnURL: 'http://www.bluecollarhunt.com/auth/google/callback'
  },
   linkedin: {
    consumerKey: '7515ix697gi6oz',
    consumerSecret: 'zPbAKreoQuQg3U3H',
    callbackURL: 'http://www.bluecollarhunt.com/auth/linkedin/callback',
    scope: ['r_emailaddress', 'r_basicprofile']
  }
};

module.exports = ids;
