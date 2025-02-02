export const cartSchema = {
  name: "cart",
  title: "Cart",
  type: "document",
  fields: [
    {
      name: "userId",
      title: "User ID",
      type: "string",
      description: "The unique identifier for the user",
    },
    {
      name: "items",
      title: "Cart Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "productId", title: "Product ID", type: "string" },
            { name: "name", title: "Product Name", type: "string" },
            { name: "price", title: "Price", type: "number" },
            { name: "quantity", title: "Quantity", type: "number" },
            { name: "image", title: "Product Image", type: "string" },
          ],
        },
      ],
    },
    {
      name: "subtotal",
      title: "Subtotal",
      type: "number",
      description: "Total price of all cart items before tax/shipping",
    },
    {
      name: "deliveryFee",
      title: "Estimated Delivery & Handling",
      type: "number",
      initialValue: 50,
    },
    {
      name: "total",
      title: "Total Price",
      type: "number",
      description: "Final cart total including fees",
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: new Date().toISOString(),
    },
  ],
};
