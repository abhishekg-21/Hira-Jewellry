// // app/(sale)/engagement-sale/_sections/MidPromo.tsx
// import Image from "next/image";
// import Link from "next/link";

// export default function MidPromo({
//   image,
//   title,
//   href,
//   ctaLabel,
// }: {
//   image: { src: string; alt: string };
//   title: string;
//   href: string;
//   ctaLabel: string;
// }) {
//   return (
//     <section className="my-6 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 items-center">
//       <div className="justify-self-center md:justify-self-start">
//         <div className="relative h-[220px] w-[220px] overflow-hidden rounded">
//           <Image
//             src={image.src}
//             alt={image.alt}
//             fill
//             sizes="220px"
//             className="object-cover"
//           />
//         </div>
//       </div>
//       <div className="text-center md:text-left">
//         <h3 className="text-[14px] sm:text-[16px] tracking-wide uppercase">
//           {title}
//         </h3>
//         <Link
//           href={href}
//           className="mt-2 inline-block text-[11px] underline underline-offset-4"
//         >
//           {ctaLabel}
//         </Link>
//       </div>
//     </section>
//   );
// }
