/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$( document ).ready(function() {
  
  const data = [];


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
      <span class="date">${timeago.format(data.created_at)}</span>
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

//loadTweets function will use jQuery to make a request to /tweets and receive the array of tweets as JSON
function loadTweets() {
  $.ajax({
    url : '/tweets',
    type: 'GET',
    success : renderTweets
  })
};



//Add an event listener for submit and prevent its default behaviour
$("#tweetform").on("submit", function(event) {
  event.preventDefault();
  const input = $('textarea').serialize();
  if (!$('textarea').val()) {
    alert('no input');
  } else if (input.length > 140) {
    alert('length too long')
  } else {
    $.post("/tweets/", input);
    loadTweets();
  }
});

});