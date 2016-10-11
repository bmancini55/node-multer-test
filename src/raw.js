
let express = require('express');
let app     = express();

app.post('/raw', (req, res) => {

  // output the headers
  console.log(req.headers);

  // capture the encoded form data
  req.on('data', (data) => {
    console.log(data.toString());
  });

  // send a response when finished reading
  // the encoded form data
  req.on('end', () => {
    res.send('ok');
  });
});


app.listen(8080);