module.exports = {
  path: 'other',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Other'))
    })
  }
}
