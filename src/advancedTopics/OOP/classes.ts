type CustomDate = {
  year?: number;
  month?: number;
  day?: number;
};

export class myDate {
  /* 
    Constructor method as indicates, is where all variables can be initialized 
    Properties can be initialized inside the Constructor Method if it had the same name.
  */

  constructor(public date: CustomDate = { year: 1990, month: 1, day: 1 }) {
    this.date = date;
  }

  /* Creating Methods */
  printFormat(): void {
    const { year, month = 1, day = 1 } = this.date;
    // console.log(JSON.stringify(this.date, null, 2));
    console.log(`${year}/${month}/${day}`);
  }
}

const customDate = new myDate({ year: 2023, month: 4 });
console.log(customDate.date);
customDate.printFormat();
