
module.exports = (function () {
  return {
    local: { // localhost
      host: '127.0.0.1',
      port: '3306',
      user: 'huadmin',
      password: '0956',
      database: 'hujackman_db'
    },
    real: { // real server db info
      host: '',
      port: '',
      user: '',
      password: '!',
      database: ''
    }
  }
});