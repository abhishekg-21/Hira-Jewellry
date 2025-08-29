// // app/diamonds/round/_components/FAQSection.tsx
// "use client";

// import { useState } from "react";

// const QA = [
//   {
//     q: "Are round diamonds the most brilliant shape?",
//     a: "Round brilliant diamonds are engineered for maximum light return and are typically the most brilliant shape.",
//   },
//   {
//     q: "Is a round diamond easy to match to a setting?",
//     a: "Yes. Round is the most common and offers the widest selection of settings.",
//   },
//   {
//     q: "What affects round diamond price the most?",
//     a: "Carat weight and cut grade tend to drive price the most; color and clarity also contribute.",
//   },
//   {
//     q: "What is the ideal cut for round diamonds?",
//     a: "Look for Excellent/Ideal cut proportions for superior sparkle.",
//   },
// ];

// export default function FAQSection() {
//   const [open, setOpen] = useState<number | null>(0);
//   return (
//     <div className="bg-neutral-50">
//       <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-10">
//         <h2 className="text-center text-[18px] font-semibold">FAQs about</h2>
//         <div className="mx-auto mt-6 max-w-3xl divide-y rounded-xl border bg-white">
//           {QA.map((item, i) => (
//             <details
//               key={i}
//               open={open === i}
//               onClick={(e) => {
//                 e.preventDefault();
//                 setOpen(open === i ? null : i);
//               }}
//               className="group"
//             >
//               <summary className="cursor-pointer list-none px-4 py-4 sm:py-5 text-[14px] flex items-center justify-between">
//                 {item.q}
//                 <span className="text-neutral-400">▾</span>
//               </summary>
//               <div className="px-4 pb-5 text-[13px] text-neutral-600">{item.a}</div>
//             </details>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
