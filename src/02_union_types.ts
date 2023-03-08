(() => {
  let userID: string | number | boolean;

  function which_type(userID: string | number | boolean) {
    if (typeof userID == 'string') {
      console.log('Soy string:', { userID });
    } else if (typeof userID == 'number') {
      console.log('Soy number:', { userID });
    } else {
      console.log('Soy bool:', { userID });
    }
  }
  which_type('Pedro');
  which_type(true);
  which_type(25);

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'XL';
  console.log(shirtSize);
})();
