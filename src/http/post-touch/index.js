let arc = require('@architect/functions')

exports.handler = async function (req) {
  await arc.events.publish({
    name: 'touch',
    payload: {}
  })
  return { statusCode: 303, headers: { location: '/' } }
}
