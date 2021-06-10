module.exports = {
  env: {
    API_URL: 'http://tray_server:8000/api',
    API_HOST: 'http://localhost:8000/api',
  },

  serverRuntimeConfig: {
    apiUrl: 'http://tray_server:8000/api'
  },
  publicRuntimeConfig: {
    apiUrl: 'http://localhost:8000/api'
  }
}
