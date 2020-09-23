@app
begin-app

@http
get /
post /touch

@events
touch

@scheduled
often rate(6 hours)

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
