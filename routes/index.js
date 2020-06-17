const express = require('express');
const router = express.Router();
const path = require('path')

router.get('/', (req, res)=>{
  res.sendFile('/Users/admin/Desktop/portfolio2/pages/home.html');

});


module.exports = router;
