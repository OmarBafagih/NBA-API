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
            axios(url)
                .then(response => {
                    const html = response.data;
                    const $ = cheerio.load(html);
                    //console.log(html);
                    const games = [];
                    const teamNames = [];
                   $('.CellGame', html).each(function(){
                        let game = $(this).text().replace(/\s\s+/g, ' ').replace("NBAt", "");
                        games.push({game});
                    });
                    $('.TeamName', html).each(function(){
                        teamNames.push($(this).text());
                    });
                    
                    let teamcount = 0;
                    for(let i = 0; i < games.length; i++){
                        games[i].away = teamNames[teamcount];
                        teamcount += 1
                        games[i].home = teamNames[teamcount];
                        teamcount += 1;
                    }
                    console.log(games)

                }).catch(err => console.log(err));
               ;
            /*request(url, (error, res, html)=>{

                
                
                if(!error && res.statusCode == 200){
                    const $ = cheerio.load(html);
                    //console.log(html);
                    let teams = [];
                    $('ScoreboardScoreCell pa4 nba ScoreboardScoreCell--post ScoreboardScoreCell--tabletPlus').each((i, el)=>{
                        
                        //const live = $(el).find('.LiveIcon_live__2F3Oq my-1').text();
                        //console.log(live);
                        const teamName = $(el).find('ScoreCell__TeamName ScoreCell__TeamName--shortDisplayName truncate db').text();
                        console.log(teamName);
                        //if(teamName !== ''){
                           teams.push(teamName)
                       // }
                        
                        
                        //console.log(i);
                       
                    });
                    console.log(teams);
                
                }
            });*/

            res.set('Content-Type', 'text/html');
            res.render('livegames');

        },
        'application/json': ()=>{
            res.set('Content-Type', 'application/json');            
        },
       'default': ()=> {
            res.status(406).send('ERROR');
        }
    });


}



module.exports = router;