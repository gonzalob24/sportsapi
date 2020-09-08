var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  let newPath = __dirname;
  let realPath = newPath.replace("routes", "");
  res.sendFile(path.join(realPath + "/views/index.html"));
});

module.exports = router;