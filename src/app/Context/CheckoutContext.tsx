"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define types for the context values
type OrderSummaryItem = {
  name: string;
  image: string;
  size: string;
  price: number;
  quantity: number;
};

type OrderSummary = {
  items: OrderSummaryItem[];
  subtotal: number;
  deliveryCharges: number;
  total: number;
};

// Define the context type
type OrderSummaryContextType = {
  orderSummary: OrderSummary;
  updateDeliveryCharges: (charges: number) => void;
  updateSubtotal: (subtotal: number) => void;
  addItem: (item: OrderSummaryItem) => void;
};

// Create the context with an empty initial value
const CheckoutContext = createContext<OrderSummaryContextType | undefined>(undefined);

// Provider component to wrap around the parts of the app that need access to the context
export const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const [orderSummary, setOrderSummary] = useState<OrderSummary>({
    items: [],
    subtotal: 0,
    deliveryCharges: 0,
    total: 0,
  });

  // Function to update delivery charges
  const updateDeliveryCharges = (charges: number) => {
    setOrderSummary((prevSummary) => ({
      ...prevSummary,
      deliveryCharges: charges,
      total: prevSummary.subtotal + charges, // Recalculate the total with new delivery charges
    }));
  };

  // Function to update subtotal
  const updateSubtotal = (subtotal: number) => {
    setOrderSummary((prevSummary) => ({
      ...prevSummary,
      subtotal: subtotal,
      total: subtotal + prevSummary.deliveryCharges, // Recalculate total when subtotal changes
    }));
  };

  // Function to add an item to the order summary
  const addItem = (item: OrderSummaryItem) => {
    setOrderSummary((prevSummary) => {
      const updatedItems = [...prevSummary.items, item];
      const newSubtotal = updatedItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
      return {
        ...prevSummary,
        items: updatedItems,
        subtotal: newSubtotal,
        total: newSubtotal + prevSummary.deliveryCharges,
      };
    });
  };

  return (
    <CheckoutContext.Provider value={{ orderSummary, updateDeliveryCharges, updateSubtotal, addItem }}>
      {children}
    </CheckoutContext.Provider>
  );
};

// Hook to use the Checkout context
export const useOrderSummary = (): OrderSummaryContextType => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error('useOrderSummary must be used within a CheckoutProvider');
  }
  return context;
};
