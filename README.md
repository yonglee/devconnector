# devconnector

Mern Stack

before deploying to heroku with
git push heroku master

run
heroku config:set $(cat .env | sed '/^$/d; /#[[:print:]]\*\$/d')
