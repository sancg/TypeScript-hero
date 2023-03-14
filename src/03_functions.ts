import { Size } from './app/products/product.model';
(() => {
  function createProductToJSON(
    title: string,
    createdAt: Date,
    size?: Size,
    stock?: number
  ): Object {
    return { title, createdAt, size, stock };
  }

  const product = createProductToJSON('P1', new Date());
  console.log(product);

  // Objects as parameters
  type LoginType = {
    email: string;
    password: string;
  };
  const login = (data: LoginType) => {
    const { email, password } = data;
    console.log(email);
  };

  login({ email: 'pepa@platzi.com', password: 'pedro123' });
})();
