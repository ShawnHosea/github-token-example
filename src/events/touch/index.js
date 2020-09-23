let arc = require('@architect/functions')
let github = require('@architect/shared/github')

exports.handler = arc.events.subscribe(github)
