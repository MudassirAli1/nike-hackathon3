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
