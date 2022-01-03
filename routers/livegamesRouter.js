//requirements
const express = require('express');
const router = express.Router();
const rp = require('request');
const url = 'https://sports.yahoo.com/nba/scoreboard/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNhLw&guce_referrer_sig=AQAAAMv4aW3YC3Nw-B69RbCGrJ0xAC8CG68xLLFZK68eXZ8Q5QYq_z7Cg6oaH08MlomBpi9jUP0TWZ0Mz5KsHEx6f-8MqPXguyUUrAyH0FdVAd_jXSt2mLXsYw4FJak_NWzeCX73nsiR08f2AXqSEU5LuhRYvUjXNhAqM_v4NgZm8XuP';
const cheerio = require('cheerio');
const request = require('request');
const { response } = require('express');


//routing
router.get('/', getLiveGames);

//webscraping
function getLiveGames(req, res, next){
    res.format({
        'text/html': ()=>{
            
            
            request(url, (error, res, html)=>{
                if(!error && res.statusCode == 200){
                    const $ = cheerio.load(html);
                   // console.log(html);
                    let teams = [];
                    $('.Va(m)').each((i, el)=>{
                        
                        //const live = $(el).find('.LiveIcon_live__2F3Oq my-1').text();
                        //console.log(live);
                        //const teamName = $(el).find('.YahooSans Fw(700)! Fz(14px)!').text();
                        //console.log(teamName);
                        //if(teamName !== ''){
                        //    teams.push(teamName)
                       // }
                        
                       // console.log(teams);
                        
                       
                    });
                
                }
            });

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