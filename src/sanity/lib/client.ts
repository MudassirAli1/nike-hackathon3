import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

export default client
const orderData = {
  _type: "order",
  name: "Test Order",
  address: "123 Street",
  postalCode: "12345",
  city: "City",
  email: "test@example.com",
  phone: "1234567890",
  pan: "ABCDE1234F",
  total: 100,
  orderDate: new Date().toISOString(),
  cartItems: [{ productName: "Product 1", quantity: 2 }],
};

client
  .create(orderData)
  .then((response) => console.log("Order created:", response))
  .catch((error) => console.error("Error:", error));
