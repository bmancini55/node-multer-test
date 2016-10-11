
let multer  = require('multer');
let express = require('express');
let app     = express();
let upload  = multer({ storage: multer.memoryStorage() });

app.post('/single', upload.single('somefile'), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send();
});

app.post('/array', upload.array('somefile'), (req, res) => {
  console.log(req.body)
  console.log(req.files);
  res.send();
});

app.listen(8080);