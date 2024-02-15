"use client";
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function MenuPage() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const session = useSession();
  const router = useRouter();

  if (session.status === "unauthenticated") {
    router.push("/login");
  }

  useEffect(() => {
    setIsLoading(true);
    const promise1 = fetch("/api/categories").then((res) => {
      res
        .json()
        .then((categories) => setCategories(categories))
        .catch((err) => {
          throw new Error("error while fetching categories");
        });
    });
    const promise2 = fetch("/api/menu-items").then((res) => {
      res
        .json()
        .then((menuItems) => setMenuItems(menuItems))
        .catch((err) => {
          throw new Error("error while fetching menuItems");
        });
    });

    Promise.all([promise1, promise2])
      .then((res) => {
        setIsLoading(false);
      })
      .catch((err) => toast.error("unable to fetch menuItems"));
  }, []);
  return (
    <section className="mt-8">
      {isLoading ? (
        <h1>...Loading</h1>
      ) : (
        categories?.length > 0 &&
        categories.map((c) => (
          <div key={c._id}>
            <div className="text-center">
              <SectionHeaders mainHeader={c.name} />
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mt-6 mb-12 border-2 border-red-400 p-4 lg:p-6 justify-items-center lg:justify-items-start">
              {menuItems
                .filter((item) => item.category === c._id)
                .map((item) => (
                  <MenuItem key={item._id} {...item} />
                ))}
            </div>
          </div>
        ))
      )}
    </section>
  );
}
