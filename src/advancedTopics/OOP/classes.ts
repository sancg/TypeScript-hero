type CustomDate = {
  year: number;
  month: number;
  day: number;
};

class myDate {
  date: CustomDate;
  /* Constructor method as indicates, is where all variables can be initialized */
  constructor(date: CustomDate) {
    this.date = date;
  }

  /* Creating Methods */
  printFormat(): void {
    const { year, month, day } = this.date;
    console.log(JSON.stringify(this.date, null, 2));
  }
}

const customDate = new myDate({ year: 2002, month: 12, day: 1 });
console.log(customDate.date);
customDate.printFormat();
