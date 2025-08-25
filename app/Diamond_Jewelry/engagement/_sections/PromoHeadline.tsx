// app/(sale)/engagement-sale/PromoHeadline.tsx
export default function PromoHeadline({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <header className="text-center mb-2">
      <h1 className="text-[18px] sm:text-[20px] font-medium tracking-wide">
        {title}
      </h1>
      <p className="mt-1 text-[11px] text-neutral-600">{subtitle}</p>
    </header>
  );
}
