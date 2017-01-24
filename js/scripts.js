var basePrice = 9.00
var newMovies = ["Revenant", "Hidden Figures"]

function Ticket(movieName, movieTime, userAge) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.userAge = userAge;
  var setMovieAge = function(name) {
    var n1 = 1;
    for (var i = 0; i < newMovies.length; i++) {
      if (name === newMovies[i]) {
        n1 = 0;
      }
    }
    return n1;
  };

  this.movieAge = setMovieAge(this.movieName);
  var setMovieValue = function(time, mAge, uAge) {
    var mValue = basePrice;
    if (time >= 1700) {
      mValue += 2
    }
    if (mAge === 0) {
      mValue += 1.5
    }
    if (uAge >= 13 && uAge <= 54) {
      mValue += 1.5
    }
    return mValue;
  };
  this.movieValue = setMovieValue(movieTime, this.movieAge, userAge);
}

Ticket.prototype.returnString = function() {
  return this.movieName + " at " + this.movieTime + " for a price of $" + this.movieValue;
}

var validateInput = function(age) {
  if ((age) && (age > 0)) {
    return true;
  } else {
    return false;
  };
};

$(function() {
  //event.preventdefault();
  $("#submitbutton").click(function() {
    var inputtedMovieName = $("#mName").val();
    console.log("movie name is " + inputtedMovieName);
    var inputtedMovieTime = parseInt($("#mTime").val());
    console.log("movie time is " + inputtedMovieTime);
    var inputtedUserAge = parseInt($("input.user-age").val());
    console.log("user Age is " + inputtedUserAge);

    if (validateInput(inputtedUserAge)) {
      var newTicket = new Ticket(inputtedMovieName, inputtedMovieTime, inputtedUserAge)
      $("p#putStuffHere").empty();
      $("p#putStuffHere").hide();
      $("p#putStuffHere").show();
      $("p#putStuffHere").text(newTicket.returnString());
    } else {
      alert("please input a valid age.")
    }
  });
});
