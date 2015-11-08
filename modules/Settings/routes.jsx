module.exports = {
  path: 'settings',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Settings'))
    })
  }
}
