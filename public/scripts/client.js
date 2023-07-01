/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$( document ).ready(function() {
  
const data = [];

//error messages are not initially visible
$("#errorinput").hide();
$("#errorlength").hide();


//Preventing XSS with escape function
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

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
      <p  class="tweet">${escape(data.content.text)}</p>
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
  //empty container before loading new tweets
  $(".tweetcontainer").empty();
  // loops through tweets
  for (const t of tweets) {
  // calls createTweetElement for each tweet
    const $tw = createTweetElement(t);
    // takes return value and appends it to the tweets container
    $('.tweetcontainer').prepend($tw);
  }
};


//loadTweets function will use jQuery to make a request to /tweets and receive the array of tweets as JSON
function loadTweets() {
  $.ajax('/tweets', {method: 'GET'})
    .then((tweets) => {
      renderTweets(tweets);
  });
};


//Add an event listener for submit and prevent its default behaviour
$("#tweetform").on("submit", function(event) {
  event.preventDefault();
  const input = $('textarea').serialize();

  if (!$('textarea').val()) {
    //alert('no input');
    $("#errorlength").slideUp();
    $("#errorinput").slideDown();
  } else if (input.length > 140) {
    //alert('length too long')
    $("#errorinput").slideUp();
    $("#errorlength").slideDown();
  } else {
    $("#errorinput").slideUp();
    $("#errorlength").slideUp();
    $.post("/tweets/", input, () => {
    loadTweets();
    // clear textarea after tweet is submitted
    $('textarea').val('');
    // reset counter after tweet is submitted
    $('.counter').text('140');
    });
  }
});

//load default tweets 
loadTweets();

});