import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const About = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "unauthenticated") {
    router.push("/login");
  }
  return (
    <div className="lg:ml-5 text-gray-500 mb-4 flex flex-col text-left gap-4">
      <p>
        Welcome to <span className="font-bold text-red-300">Feastify</span>,
        your ultimate destination for delightful and hassle-free food delivery.
        Our mission is to connect food lovers with their favorite local
        restaurants, making every meal a delightful experience.
      </p>

      <h2 className="font-bold text-2xl">Our Story</h2>
      <p>
        At <span className="font-bold text-red-300">Feastify</span>, we started
        with a simple yet powerful idea: to revolutionize the way people
        experience food delivery. Our journey began with a passion for good food
        and a commitment to providing a seamless, convenient, and enjoyable
        dining experience.
      </p>

      <h2 className="font-bold text-2xl">What Sets Us Apart</h2>

      <h3 className="font-bold">Culinary Diversity</h3>
      <p>
        We take pride in offering a diverse range of culinary delights to suit
        every palate. From local favorites to international cuisines, our
        platform brings together a curated selection of restaurants, ensuring
        you have access to the finest flavors right at your fingertips.
      </p>
      <h3 className="font-bold">Seamless Ordering</h3>
      <p>
        Say goodbye to long wait times and complicated order processes. With our
        user-friendly app, you can browse through menus, customize your orders,
        and securely place them with just a few taps. Whether you re craving
        comfort food or exploring new tastes, we ve got you covered.
      </p>
      <h3 className="font-bold">Fast and Reliable Delivery</h3>
      <p>
        Our commitment to excellence extends to our delivery service. We
        understand the importance of prompt and reliable deliveries. That s why
        we ve partnered with a network of dedicated drivers to ensure your
        orders reach you fresh and hot, right on time.
      </p>
      <h2 className="font-bold text-2xl">Our Vision</h2>
      <p>
        At <span className="font-bold text-red-300">Feastify</span>, we envision
        a world where everyone can indulge in their favorite meals effortlessly.
        We re passionate about fostering a sense of community and connection
        through the joy of sharing good food. Your satisfaction is our top
        priority, and we re continually innovating to enhance your dining
        experience.
      </p>
    </div>
  );
};

export default About;
