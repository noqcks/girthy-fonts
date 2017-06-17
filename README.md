# MeanWidth


# Ramp-Up

```
cd /Users/qkeave/Desktop/WEB/Mean-Width 
ssh-add ansiblee.pem 
ssh 52.25.72.167 -l ubuntu

#NOW YOUR IN THE SERVER
sudo su

#pull GIT
git init
git remote add origin https://github.com/quitequinn/MeanWidth.git
git pull origin master

#SERVER
ps aux | grep forever

#STOP SERVER
forever stop app.js

#START SERVER
forever start app.js

```