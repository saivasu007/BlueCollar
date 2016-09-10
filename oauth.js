var ids = {
  facebook: {
    clientID: '1598117983823240',
    clientSecret: '62c7b61da6b42ddb39efea8b25462d8c',
    callbackURL: 'https://itubluecollar.herokuapp.com/auth/facebook/callback'
  },
  google: {
    clientID: ' 806639223559-nr1vj3i5207s1njf866cevhmtbe4u2fu.apps.googleusercontent.com ',
    clientSecret: '6pG05FGf8cAhCl-V2HAspna0',
    returnURL: 'https://itubluecollar.herokuapp.com/auth/google/callback'
  },
   linkedin: {
    consumerKey: '7578yq7jpw4ui9',
    consumerSecret: '5fHsmNyBb3bEYWlV',
    callbackURL: 'https://itubluecollar.herokuapp.com/auth/linkedin/callback',
    scope: ['r_emailaddress', 'r_basicprofile']
  }
};

module.exports = ids;
