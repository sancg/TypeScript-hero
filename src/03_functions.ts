(() => {
  type Size = 'S' | 'M' | 'L' | 'XL';

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
})();
