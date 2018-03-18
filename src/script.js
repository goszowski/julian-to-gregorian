Date.prototype.julianToGregorian = function() {
			var date = new Date(this.valueOf());
			var addDays = 0;

			if(date >= new Date('1582-10-05') && date < new Date('1700-02-29')) {
				addDays = 10;
			}
			else if(date >= new Date('1700-03-01') && date < new Date('1800-02-29')) {
				addDays = 11;
			}
			else if(date >= new Date('1800-03-01') && date < new Date('1900-02-29')) {
				addDays = 12;
			}
			else if(date >= new Date('1900-03-01') && date < new Date('2100-02-29')) {
				addDays = 13;
			}
			else if(date >= new Date('2100-03-01') && date < new Date('2200-02-29')) {
				addDays = 14;
			}
			else if(date >= new Date('2200-03-01') && date < new Date('2300-02-29')) {
				addDays = 15;
			}

			date.setDate(date.getDate() + addDays);

			return date;
		}
