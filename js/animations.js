$(document).ready(function() {

  var textBox = $('.tweet-compose');
  var tweetControls = $('#tweet-controls');


  tweetControls.hide();
  $(".reply").hide();

  // tweet compose child of reply
  // tweet compose child of tweet content
  // **need to fix clicking on text box, and hiding/displaying buttons

  textBox.on('click', function() {
    $(this).height(42);
    if(!textBox.val()) {
      $("#tweet-submit").prop("disabled", true);
     }
     if(textBox.val() > 0) {
       $("#tweet-submit").prop("disabled", false);
     }

     if($(this).parent()[0] === $("#tweet-content")[0]) {
       console.log('HIT');
    $("#tweet-controls").css({
    "display": "block",
    });
  }
    // $(".reply > #tweet-controls").css({
    // "display": "block",
    // });
  });

  // open up text box to reply when clicking reply link
  $(".reply-link").click(function() {
    $(this).parent().parent(".tweet-actions").siblings(".reply").css("display", "block");
    // focus text box
    $(this).parent().parent(".tweet-actions").siblings(".reply").children(".tweet-compose").focus();
  });

  textBox.on('blur', function() {
    console.log('hit');
    if(!$(this).val()){
    $(this).parent(".reply").css("display", "none");
    }
    });

 textBox.on('blur', function() {
   if(!textBox.val()) {
   tweetControls.hide();
   $(this).height('');
  }
 });

 textBox.on('keyup', function() {
   var charLeft = 140 - $(this).val().length;
   if($(this).parent() === $("#tweet-content")) {
     var maxChar = $(this).siblings("#tweet-controls").children("#char-count");
     var button = $(this).siblings("#tweet-controls").children(".button");
   }
   else {
   var maxChar = $(this).siblings("#tweet-controls").children("#char-count");
   var button = $(this).siblings("#tweet-controls").children(".button");
  }

   maxChar.text(charLeft);

   if (charLeft <= 10) {
     maxChar.css("color", "red")
   }
   else {
     maxChar.css("color", "")
   }
   if(charLeft < 0 || $(this).val().length === 0) {
     button.prop("disabled", true);
   }
   else {
     button.prop("disabled", false);
   }

 });

});

//
// tweet compose child of reply
// tweet compose child of tweet content
