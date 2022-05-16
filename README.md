# NBA-API

## How to use: ##

  1. create a 'GET' request to the following url https://young-basin-92734.herokuapp.com/livegames.
  2. The format should look similar to this: {"games":[{"game":"BOS 109 - MIL 81","away":" 3 Milwaukee","home":" 2 Boston"},{"game":"DAL 123 - PHO 90","away":" 4 Dallas","home":" 1 Phoenix"}]}.


### A few things to note ###

  1. The numbers before the city (for the values of "away" and "home" are indicators to the team's ranking among their respective conferences.
  2. The value for "game" shows the score with the leading team always appearing on the left-hand side.
