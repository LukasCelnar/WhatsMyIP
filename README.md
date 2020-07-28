# WhatsMyIP

## What is this project doing ?

It's pretty simple, it shows you your External (Public) IP Address with other informations like your current Country, Region, City, ZIP Code, Time Zone, Latitude, Longitude also you can see your current location on a map.

Or you can search with IP adress and find out where someone with this IP lives.

## How everything works behind the scenes ?

Again ... Its really simple, when you open this website your browser will load all the JavaScript and call https://freegeoip.app/json/ API ,this will return all the informations in JSON format that is then parsed on JS object and rendered on website.

## How was this project built ?

It was built in a few hours using famous JS framework React with the help of React Hooks.

## How can i run this project on my local machine ?

All you need to do is to:
1. Clone this repo
2. Open terminal in this project directory
3. Run `npm install`
4. Run `npm start`

After that you should have this website running on localhost on port 3000 ([http://localhost:3000](http://localhost:3000))