module.exports = {
  development: {
    port: 5000,
    saltingRounds: 10
  },
  production: {
    port: process.env.PORT || 5000,
    saltingRounds: 10
  },
  dbUrl: 'mongodb://test1:abhinesh77@ds121301.mlab.com:21301/heroku_1ld3k6rl'
}