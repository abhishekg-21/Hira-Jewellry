// // app/brands/endless/diamonds/round/_components/DiamondFinder.tsx
// "use client";

// import { useState } from "react";

// type Props = {
//   title?: string;
//   defaultType?: "natural" | "lab";
//   onChange?: (v: "natural" | "lab") => void;
// };

// export default function DiamondFinder({
//   title = "Diamond Finder",
//   defaultType = "natural",
//   onChange,
// }: Props) {
//   const [type, setType] = useState<"natural" | "lab">(defaultType);
//   const [expanded, setExpanded] = useState(false);

//   const navy = "#0b1a2b";

//   const baseText =
//     "Real. Rare. Responsible. Discover our curated selection of natural diamonds renowned for their quality and craftsmanship. Each diamond has been expertly photographed in consistent lighting";
//   const moreText =
//     " so you can compare sparkle and clarity with confidence. Our filters make it easy to narrow by carat, color, clarity, and price.";

//   const handleSelect = (v: "natural" | "lab") => {
//     setType(v);
//     onChange?.(v);
//   };

//   return (
//     <section className="py-6 text-center">
//       {/* Title */}
//       <h2 className="font-serif text-[28px] sm:text-[32px] tracking-tight" style={{ color: navy }}>
//         {title}
//       </h2>

//       {/* Paragraph with Show More */}
//       <p className="mx-auto mt-2 max-w-[880px] text-[14px] leading-6 text-neutral-700 px-32">
//         {baseText}
//         {!expanded && (
//           <>
//             {" "}
//             <button
//               type="button"
//               className="underline font-medium"
//               onClick={() => setExpanded(true)}
//             >
//               Show More
//             </button>
//           </>
//         )}
//         {expanded && moreText}
//       </p>

//       {/* Segmented control */}
//       <div className="mt-4 flex justify-center">
//         <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-100 p-1">
//           <button
//             type="button"
//             onClick={() => handleSelect("natural")}
//             className={[
//               "px-6 sm:px-7 py-2.5 rounded-full text-[14px] font-semibold transition",
//               type === "natural"
//                 ? "bg-[#0b1a2b] text-white shadow"
//                 : "text-[#0b1a2b]",
//             ].join(" ")}
//           >
//             Natural
//           </button>
//           <button
//             type="button"
//             onClick={() => handleSelect("lab")}
//             className={[
//               "px-6 sm:px-7 py-2.5 rounded-full text-[14px] font-semibold transition",
//               type === "lab"
//                 ? "bg-[#0b1a2b] text-white shadow"
//                 : "text-[#0b1a2b]",
//             ].join(" ")}
//           >
//             Lab-Grown
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
