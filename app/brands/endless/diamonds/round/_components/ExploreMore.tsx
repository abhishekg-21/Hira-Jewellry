// // app/diamonds/round/_components/ExploreMore.tsx
// "use client";

// import Link from "next/link";

// export default function ExploreMore() {
//   const links = [
//     "Shop All Natural Diamonds",
//     "Shop All Lab Grown Diamonds",
//     "Round Cut Engagement Rings",
//     "Round Cut Diamond Earrings",
//     "Round Cut Diamond Necklaces",
//     "Round Cut Diamond Bracelets",
//   ];
//   return (
//     <div className="bg-neutral-50/60">
//       <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-10">
//         <h3 className="text-center font-semibold">Explore More Round Cut Jewelry</h3>
//         <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-[13px]">
//           {links.map((l) => (
//             <li key={l}>
//               <Link href="#" className="underline underline-offset-2 hover:no-underline">
//                 {l}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
