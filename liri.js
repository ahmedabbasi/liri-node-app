//require("dotenv").config();

//var spotify = new Spotify(keys.spotify);
//var client = new Twitter(keys.twitter);
require("dotenv").config();


var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

//var client = new Twitter(keys.twitter);

var params = {
  q: 'ahmedabbasirbc'
};

client.get('search/tweets', params, function (error, tweets, response) {
  if (!error) {
    var tweets = tweets.statuses;
    for (var i = 0; i < tweets.length; i++) {
      console.log(tweets[i].text)
    }

  }
}); // Tweet body. 
//console.log(response);  // Raw response object. 

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
  
});

spotify.search({
  type: 'track',
  query: 'All the Small Things'
}, function (err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

  console.log(data.tracks.items[1].artists[0].name);
  console.log(data.tracks.items[1].album.name);

});