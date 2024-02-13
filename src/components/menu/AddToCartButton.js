import FlyingButton from "react-flying-item";

export default function AddToCartButton({ hasSizesOrExtras, onClick, image }) {
  // if (!hasSizesOrExtras) {
  //   return (
  //     <div
  //       onClick={onClick}
  //       className="items-center justify-center rounded bg-slate-900 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-[12px]"
  //     >
  //       <FlyingButton targetTop={"5%"} targetLeft={"95%"} src={image}>
  //         <div className="flex w-full justify-center items-center text-white px-5 py-[0.16rem]">
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             class="mr-2 h-6 w-6"
  //             fill=""
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //             stroke-width="2"
  //           >
  //             <path
  //               stroke-linecap="round"
  //               stroke-linejoin="round"
  //               d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
  //             />
  //           </svg>
  //           Add to cart
  //         </div>
  //       </FlyingButton>
  //     </div>
  //   );
  // }
  return (
    <button
      onClick={onClick}
      class="flex m-0 w-full items-center justify-center rounded-[12px] bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="mr-2 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      Add to cart
    </button>
  );
}
