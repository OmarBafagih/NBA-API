//requirements
const express = require('express');
const router = express.Router();
const cheerio = require('cheerio');
const axios = require("axios")
//const { response } = require('express');

const url = 'https://www.cbssports.com/nba/schedule/';


//routing
router.get('/', getLiveGames);

//webscraping
function getLiveGames(req, res, next){
    res.format({
        'text/html': ()=>{
           

        },
        'application/json': ()=>{
            const games = [];
            const teamNames = [];
            axios(url)
            .then(response => {
                const html = response.data;
                const $ = cheerio.load(html);
                //console.log(html);
                
               $('.CellGame', html).each(function(){
                    let game = $(this).text().replace(/\s\s+/g, ' ').replace("NBAt", "");
                    games.push({game});
                });
                $('.TeamName', html).each(function(){
                    teamNames.push($(this).text().replace(/\s\s+/g, ' ').replace("NBAt", ""));
                });
                
                let teamcount = 0;
                for(let i = 0; i < games.length; i++){
                    games[i].away = teamNames[teamcount];
                    teamcount += 1;
                    games[i].home = teamNames[teamcount];
                    teamcount += 1;
                }
               console.log(games)
                res.json({
                'livegames': games
                });
               //if(response.statusCode === 200){
               //    console.log(games);
              // }

            }).catch(err => console.log(err));
           
       
            
           


           // res.set('Content-Type', 'application/json');            
        },
       'default': ()=> {
            res.status(406).send('ERROR');
        }
    });


}



module.exports = router;