
import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../sanity/lib/client"; // Ensure this client is correctly configured

// Define the shape of the order data
interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface OrderData {
  firstName: string;
  lastName: string;
  address: string;
  postalCode: string;
  city: string;
  email: string;
  phone: string;
  pan: string;
  cartItems: CartItem[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const {
      firstName,
      lastName,
      address,
      postalCode,
      city,
      email,
      phone,
      pan,
      cartItems,
    }: OrderData = req.body;

    // Check if all required fields are provided
    if (!firstName || !lastName || !address || !email || !phone || !pan) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    const orderData = {
      _type: "order",
      name: `${firstName} ${lastName}`,
      address,
      postalCode,
      city,
      email,
      phone,
      pan,
      total: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
      orderDate: new Date().toISOString(),
      cartItems: cartItems.map((item) => ({
        _type: "cartItem",
        productName: item.name,
        quantity: item.quantity,
      })),
    };

    try {
      // Create the order in Sanity
      const createdOrder = await client.create(orderData);
      return res.status(201).json({ message: "Order placed successfully", order: createdOrder });
    } catch (error: any) {
      console.error("Sanity Error:", error);
      return res.status(500).json({ message: "Failed to place order", error: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
