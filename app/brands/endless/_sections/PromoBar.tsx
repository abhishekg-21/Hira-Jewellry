export default function PromoBar({ text }: { text: string }) {
  return (
    <div className="w-full bg-[#0b1a2b] text-white text-center text-[11px] sm:text-xs py-2">
      {text}
    </div>
  );
}
