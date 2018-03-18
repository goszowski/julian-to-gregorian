Date.prototype.julianToGregorian = function() {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + 14);
  return date;
}
