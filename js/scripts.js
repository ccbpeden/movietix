var basePrice = 9.00

function Ticket(movieName, movieTime, movieAge, userAge) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.movieAge = movieAge;
  this.userAge = userAge;
  this.movieValue = basePrice;
}

Ticket.prototype.getMovieValue = function (/*movieAge, movieTime, userAge*/) {
  if (this.movieTime >= 1700){
    this.movieValue += 2
  }
  if (this.movieAge === 0) {
    this.movieValue += 1.5
  }
  if (this.userAge >= 13 && this.userAge <= 54) {
    this.movieValue += 1.5
  }
  return this.movieValue
};

var tix = new Ticket("test",1600,1,50);

$(function(){
  event.prevent(default);
  
});
