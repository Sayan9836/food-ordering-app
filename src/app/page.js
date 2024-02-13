"use client";

import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import About from "@/components/layout/About";
import Image from "next/image";
import Testimonial from "@/components/layout/Testimonial";
import Services from "../components/layout/Services";
import Contact from "@/components/layout/Contact";
import { useContext, useEffect } from "react";
import { CartContext } from "@/components/AppContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { setCartProducts, cartProducts, setUserInfo } =
    useContext(CartContext);

  const session = useSession();
  const router = useRouter();
  console.log("home-page=>", session);

  if (session.status === "unauthenticated") {
    router.push("/login");
  }

  useEffect(() => {
    wrapperFunction();
  }, []);

  const wrapperFunction = async () => {
    const existed = await isProfilePresent();
    console.log("page-userInfo =>", existed);
    if (existed) {
      await fetchData();
    }
  };

  const fetchData = async () => {
    let response = await fetch("/api/cart");
    response = await response.json();
    setCartProducts(response.products);
    console.log("carts =>", response.products);
  };

  const isProfilePresent = async () => {
    let response = await fetch("/api/checkprofile");
    response = await response.json();

    console.log("profile-exists =>", response);

    if (response.status === "error") {
      setUserInfo(false);
      return false;
    } else if (response.status === "success") {
      setUserInfo(true);
    }
    return true;
  };
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16 p-4" id="about">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className=" lg:flex items-center justify-center ">
          <About />
          <Image
            src={"/burger.png"}
            objectFit={"cover"}
            width={"700"}
            height={"450"}
            className=""
          ></Image>
        </div>
      </section>

      <section className="text-center max-w-7xl mx-auto ">
        <SectionHeaders mainHeader={"Why you'll love Feastify"} />
        <Services />
      </section>

      <section className="">
        <Testimonial />
      </section>

      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        {/* <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+46738123123"
          >
            +46 738 123 123
          </a>
        </div> */}
        <Contact />
      </section>
    </>
  );
}
