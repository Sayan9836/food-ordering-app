"use client";
import { CartContext } from "@/components/AppContext";
import Bars2 from "@/components/icons/Bars2";
import ShoppingCart from "@/components/icons/ShoppingCart";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

function AuthLinks({ status, userName, handleLogOut }) {
  if (status === "authenticated") {
    return (
      <>
        <Link href={"/profile"} className="whitespace-nowrap">
          Hello, {userName}
        </Link>
        <button
          onClick={handleLogOut}
          className="bg-primary rounded-full text-white px-8 py-2"
        >
          Logout
        </button>
      </>
    );
  }
  if (status === "unauthenticated") {
    return (
      <>
        <Link href={"/login"}>Login</Link>
        <Link
          href={"/register"}
          className="bg-primary rounded-full text-white px-8 py-2"
        >
          Register
        </Link>
      </>
    );
  }
}

export default function Header() {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  const { cartProducts, setCartProducts, userInfo } = useContext(CartContext);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const router = useRouter();
  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  }
  console.log("header ->", session);

  const handleCartClick = (e) => {
    console.log(userInfo);
    if (userInfo) {
      router.push("/cart");
    } else {
      alert("create your profile to continue!");
    }
  };

  const handleLogOut = async (e) => {
    toast.success("successfully LogOut");
    await signOut({ callbackUrl: "/login" });
    setCartProducts([]);
  };
  return (
    <header className="p-4 mx-auto max-w-7xl">
      <div className="flex items-center md:hidden justify-between">
        <Link
          className="text-primary font-semibold text-2xl"
          href={status === "authenticated" ? "/" : ""}
        >
          Feastify
        </Link>
        <div className="flex gap-8 items-center">
          <Link href={"/cart"} className="relative">
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
                {cartProducts.length}
              </span>
            )}
          </Link>
          <button
            className="p-1 border"
            onClick={() => setMobileNavOpen((prev) => !prev)}
          >
            <Bars2 />
          </button>
        </div>
      </div>
      {mobileNavOpen && (
        <div
          onClick={() => setMobileNavOpen(false)}
          className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center"
        >
          <Link href={status === "authenticated" ? "/" : ""}>Home</Link>
          <Link href={status === "authenticated" ? "/menu" : ""}>Menu</Link>
          <Link href={status === "authenticated" ? "/#about" : "#"}>About</Link>
          <Link href={status === "authenticated" ? "/#contact" : "#"}>
            Contact
          </Link>
          <AuthLinks
            status={status}
            userName={userName}
            handleLogOut={handleLogOut}
          />
        </div>
      )}
      <div className="hidden md:flex items-center justify-between">
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <Link
            className="text-primary font-semibold text-2xl"
            href={status === "authenticated" ? "/" : ""}
          >
            Feastify
          </Link>
          <Link href={status === "authenticated" ? "/" : ""}>Home</Link>
          <Link href={status === "authenticated" ? "/menu" : ""}>Menu</Link>
          <Link href={status === "authenticated" ? "/#about" : "#"}>About</Link>
          <Link href={status === "authenticated" ? "/#contact" : "#"}>
            Contact
          </Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          <AuthLinks
            status={status}
            userName={userName}
            handleLogOut={handleLogOut}
          />
          <div
            onClick={status === "authenticated" ? handleCartClick : () => {}}
            className="relative"
          >
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
                {cartProducts.length}
              </span>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
