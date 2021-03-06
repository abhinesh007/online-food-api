module.exports = {
  development: {
    port: 5000,
    saltingRounds: 10
  },
  production: {
    port: process.env.PORT || 5000,
    saltingRounds: 10
  }
}