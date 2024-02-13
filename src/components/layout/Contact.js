import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const Contact = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "unauthenticated") {
    router.push("/login");
  }

  return (
    <div className="px-4 mx-auto max-w-screen-md">
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-500 sm:text-xl">
        Got a technical issue? Want to send feedback about a beta feature? Need
        details about our Business plan? Let us know.
      </p>
      <form action="#" className="space-y-8">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-500 text-left "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:border-gray-400 focus:outline-none"
            placeholder="email@gmail.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-500 text-left"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:border-gray-400"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-500 text-left"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="6"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
