import { type SchemaTypeDefinition } from 'sanity'
import { productSchema} from './product'
import { cartSchema } from './Cart'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema , cartSchema],
}
