var ids = {
  facebook: {
    clientID: '1598117983823240',
    clientSecret: '62c7b61da6b42ddb39efea8b25462d8c',
    callbackURL: 'http://www.bluecollarhunt.com/auth/facebook/callback'
  },
  google: {
    clientID: '8146498752-hdommt7s414bmhlpocl3euaklqsqriel.apps.googleusercontent.com',
    clientSecret: '78cFdH1dYrKXtRDsyckA1s4Z',
    returnURL: 'http://www.bluecollarhunt.com/auth/google/callback'
  },
   linkedin: {
    consumerKey: '7578yq7jpw4ui9',
    consumerSecret: '5fHsmNyBb3bEYWlV',
    callbackURL: 'http://www.bluecollarhunt.com/auth/linkedin/callback',
    scope: ['r_emailaddress', 'r_basicprofile']
  }
};

module.exports = ids;
