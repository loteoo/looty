const http = require('http');
const kijiji = require("kijiji-scraper");

const nano = require('nano')('http://localhost:5984');

const looty = nano.db.use('looty');


// kijiji.Ad.Get("https://www.kijiji.ca/v-1-bedroom-den-apartments-condos/ville-de-montreal/3-1-2-parc-la-fontaine-metro-sherbrooke-highrise/1320572921").then(function(ad) {

//   response.write(JSON.stringify(ad, null, 2));
//   response.end();

// }).catch(console.error);




const options = {
  minResults: 40
};

const params = {
    locationId: 1700281,
    categoryId: 17220001
};

// Scrape using returned promise
kijiji.search(params, options).then(function(ads) {

  ads.forEach(ad => {
    looty.insert(ad).then((body) => {
      console.log(body);
    });
  });

}).catch(console.error);

  

