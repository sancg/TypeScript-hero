(() => {
  let discount = parseInt('asd');
  if (discount <= 200) {
    console.log('Applied discount');
  }

  let hex = 0xf2f2f2;

  // Arrays
  let products = ['x-comp', 23, 'desc', true];

  let foo: any;
  foo = [2, 5, 10];

  let newArray = foo as number[];
  newArray = newArray.filter((item) => item > 3);
  console.log({ newArray });
})();
