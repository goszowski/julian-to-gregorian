Date.prototype.julianToGregorian = function() {
  return new Date(this.valueOf()).setDate(date.getDate() + 14);
}
