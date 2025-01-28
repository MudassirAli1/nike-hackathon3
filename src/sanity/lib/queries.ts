import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(`
  *[_type == "product"]{
    _id,
    productName,
    category,
    price,
    inventory,
    colors,
    status,
    description,
    slug,
    "imageUrl": image.asset->url
  }
`);
export const mens = defineQuery(`
  *[_type == "product" && category == "Men's"]{
 _id,
    productName,
    category,
    price,
    inventory,
    colors,
    status,
    description,
    slug,
    "imageUrl": image.asset->url
  }
  `)
