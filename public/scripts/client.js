/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$( document ).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];


const createTweetElement = function(data) {
  var $tweet =
  `<article class="tweets">
    <header>
      <span class="user">
        <img src="${data.user.avatars}">
        <span>${data.user.name}</span>
        <span class="username">${data.user.handle}</span>
      </span>
    </header>
    <footer>
      <p  class="tweet">${data.content.text}</p>
      <hr>
      <span class="date">10 days ago</span>
      <span class="icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
    </span>
    </footer>
  </article>`
  return $tweet;
};


const renderTweets = function(tweets) {
// loops through tweets
  for (const t of tweets) {
  // calls createTweetElement for each tweet
    let $tw = createTweetElement(t);
    // takes return value and appends it to the tweets container
    $('.tweetcontainer').append($tw);
  }
};

renderTweets(data);

});