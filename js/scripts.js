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

//Delete if function works in constructor
// Ticket.prototype.setMovieAge = function() {
//   for (var i = 0; i < newMovies.length; i++){
//     if (this.movieName === newMovies[i]){
//       this.movieAge === 0;
//     }
//   }
// };


var tix = new Ticket("test", 1600, 1, 50);

$(function() {
  event.preventdefault();
  var newTicket = new Ticket()
});
