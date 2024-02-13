"use client";
import { SessionProvider, useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

export const CartContext = createContext({});

export function cartProductPrice(cartProduct) {
  let price = cartProduct.basePrice;
  if (cartProduct.size) {
    price += cartProduct.size.price;
  }
  if (cartProduct.extras?.length > 0) {
    for (const extra of cartProduct.extras) {
      price += extra.price;
    }
  }
  return price;
}

export function AppProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [userInfo, setUserInfo] = useState(true);

  const ls = typeof window !== "undefined" ? window.localStorage : null;

  useEffect(() => {}, []);

  function clearCart() {
    setCartProducts([]);
    saveCartProductsToLocalStorage([]);
  }

  async function removeCartProduct(_id) {
    let response = await fetch("/api/cart?_id=" + _id, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.log("error while deleting");
    } else {
      response = await response.json();
      console.log("context-delete=> ", response);
      setCartProducts(response.remainings);
    }
  }

  function saveCartProductsToLocalStorage(cartProducts) {
    if (ls) {
      ls.setItem("cart", JSON.stringify(cartProducts));
    }
  }

  async function addToCart(product, size = null, extras = []) {
    console.log("calling", product);

    console.log("addTocart=> ", userInfo);

    if (userInfo) {
      let response = await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({
          product: product,
        }),
      });
      response = await response.json();
      console.log("cartcontext ->", response);

      const cartItems = response.products;
      setCartProducts(cartItems);
      saveCartProductsToLocalStorage(cartItems);
    }
  }

  return (
    <SessionProvider>
      <CartContext.Provider
        value={{
          cartProducts,
          setCartProducts,
          addToCart,
          removeCartProduct,
          clearCart,
          userInfo,
          setUserInfo,
        }}
      >
        {children}
      </CartContext.Provider>
    </SessionProvider>
  );
}
