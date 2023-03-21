import { Product } from './product.model';

// Omit and Pick Utility types
interface CreateProductDTO
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt'> {
  categoryID: string | number;
}

type giveParams = Pick<Product, 'id' | 'stock'>;

/* Creating the Partial and Required Utility types
 *
 * This would extend the CreateProductDTO which allow us to Omit the specified properties.
 * and adding the CategoryID to point to the corresponding data-set of categories.
 *
 */
interface UpdateProductDTO extends Partial<CreateProductDTO> {}

/**
 *  The Required type is the opposite as Partial.
 *  It makes all the properties needed for passing through.
 */
interface neededProps extends Required<Product> {}

export { CreateProductDTO, UpdateProductDTO };
