type CustomDate = {
  year: number;
  month: number;
  day: number;
};

export class myDate {
  date: CustomDate;
  /* Access to variables */
  private year: number;

  /* Constructor method as indicates, is where all variables can be initialized */
  constructor(date: CustomDate) {
    this.date = date;
    this.year = date.year;
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

/* Viewing accessibility errors when declaring private properties */
class myClass {
  private year: number;

  constructor(year: number) {
    this.year = year;
  }
}

const useClass = new myClass(2023);
// ❌ This would cause and accessible variable error
//console.log(useClass.year);
