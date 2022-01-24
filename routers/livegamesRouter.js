//requirements
const express = require('express');
const router = express.Router();
//const rp = require('request');
const url = '';
const cheerio = require('cheerio');
//const request = require('request');
const { response } = require('express');

const axios = require("axios")
//const cheerio = require("cheerio")



//routing
router.get('/', getLiveGames);

//webscraping
function getLiveGames(req, res, next){
    res.format({
        'text/html': ()=>{
            
            async function fetchHTML(url) {
                const { data } = await axios.get(url)
                return cheerio.load(data)
                const $ = await fetchHTML("https://www.espn.com/nba/scoreboard");
              }
              
              
              
              
              // Print the full HTML
              console.log(`Site HTML: ${$.html()}\n\n`)
              
              // Print some specific page content
              console.log(`First h1 tag: ${$('h1').text()}`)
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