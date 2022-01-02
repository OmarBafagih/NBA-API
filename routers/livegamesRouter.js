//requirements
const express = require('express');
const router = express.Router();

//routing
router.get('/', getLiveGames);

//webscraping
function getLiveGames(res, req, next){

}



module.exports = router;