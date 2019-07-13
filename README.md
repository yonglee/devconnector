# devconnector

Mern Stack

check production at
https://thawing-basin-69944.herokuapp.com 


before deploying to heroku with
git push heroku master

run
heroku config:set $(cat .env | sed '/^$/d; /#[[:print:]]\*\$/d')
for .env
