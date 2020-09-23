
let tiny = require('tiny-json-http')

module.exports = async function github() {
  
  // get the sha
  let result = await tiny.get({
    url: `https://api.github.com/repos/brianleroux/whats-stopping-you/contents/foo.txt`,
    headers: {
      Authorization: `Bearer ${ process.env.GITHUB_TOKEN }`
    }
  })
  
  console.log('got here', result)
  
  // write the file
  return tiny.put({
    url: `https://api.github.com/repos/brianleroux/whats-stopping-you/contents/foo.txt`,
    headers: {
      Authorization: `Bearer ${ process.env.GITHUB_TOKEN }`
    },
    data: {
      sha: result.body.sha,
      message: `hey there ${ new Date(Date.now()).toISOString() }`,
      content: Buffer.from(Date.now() + '\n').toString('base64')
    }
  })
}
