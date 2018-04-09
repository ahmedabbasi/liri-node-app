//Twitter API
require("dotenv").config();


var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

//var client = new Twitter(keys.twitter);
if (process.argv[2] === 'my-tweets') {


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
  });
}


// Spotify API
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET

});

if (process.argv[2] === 'spotify-this-song') {

  //var query = process.argv[3]

  spotify.search({
    type: 'track',
    query: process.argv[3],
  }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    console.log("Artist Name: " + data.tracks.items[1].artists[0].name);
    console.log("Album Name: " + data.tracks.items[0].album.name);
    console.log("Link: " + data.tracks.href);
    console.log("Song: " + data.tracks.items[0].name)

  });
}
// OMDB
var request = require("request");
if (process.argv[2] === 'movie-this') {

  var movieName = process.argv[3];
  // Then run a request to the OMDB API with the movie specified
  request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=98de2b5e", function (error, response, body) {

    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {

      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).

      //* Title of the movie.
      //* Year the movie came out.
      //* IMDB Rating of the movie.
      //* Rotten Tomatoes Rating of the movie.
      //* Country where the movie was produced.
      //* Language of the movie.
      //* Plot of the movie.
      //* Actors in the movie.

      //console.log(JSON.parse(body));
      console.log("The movie's rating is: " +
        JSON.parse(body).imdbRating);
      console.log("The movie's name is: " +
        JSON.parse(body).Title);
      console.log("The movie's release year is: " +
        JSON.parse(body).Year);
      console.log("The movie's production country is: " +
        JSON.parse(body).Country);
      console.log("The movie's Rotten Tomatoes Rating is: " +
        JSON.parse(body).Ratings[1].Value);
      console.log("The movie's Language is: " +
        JSON.parse(body).Language);
      console.log("The movie's Plot is: " +
        JSON.parse(body).Plot);
      console.log("The movie's Actors are " +
        JSON.parse(body).Actors);
    }

  });
}