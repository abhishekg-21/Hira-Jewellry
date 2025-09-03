// app/engagement-rings/settings/_components/Toolbar.tsx
"use client";

export default function Toolbar({
  total,
  showing,
}: {
  total: number;
  showing: number;
}) {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen mt-5">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between">
          {/* left cluster */}
          <div className="min-w-0">
            <div className="flex items-center gap-6">
              <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                <span className="inline-block h-[18px] w-[18px] rounded-[2px] border border-[#0b1a2b]" />
                <span className="text-[#0b1a2b]">Fast Shipping</span>
              </label>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-[#0b1a2b]"
              >
                <RefreshIcon className="h-4 w-4" />
                <span className="font-medium">Reset Filters</span>
              </button>
            </div>
            <div className="mt-6 text-[14px] text-neutral-500">
              {showing.toLocaleString()} of {total.toLocaleString()} Results
            </div>
          </div>

          {/* right cluster */}
          <div className="flex flex-col items-end gap-4">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-[#0b1a2b] px-5 py-2 text-[#0b1a2b]"
            >
              <span className="font-semibold">Advanced Filters</span>
              <PlusIcon className="h-4 w-4" />
            </button>

            <div className="flex items-end gap-10">
              <LabeledUnderlineSelect label="Shipping Date By:" value="Any Date" />
              <LabeledUnderlineSelect label="Sort By:" value="Best Match" />
              <div className="flex items-center gap-4 text-[#0b1a2b]">
                <GridIcon className="h-4 w-4" />
                <TwinIcon className="h-4 w-4" />
                <ListIcon className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LabeledUnderlineSelect({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-[180px]">
      <div className="mb-1 text-[13px] text-neutral-500">{label}</div>
      <button className="group inline-flex items-center gap-2 border-b-2 border-neutral-200 pb-1 text-[#0b1a2b]">
        <span className="font-semibold">{value}</span>
        <CaretDown className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

/* small inline icons */
function RefreshIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#0b1a2b" strokeWidth="1.8">
      <path d="M4 12a8 8 0 0 1 13.657-5.657L20 8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 4v4h-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 12a8 8 0 0 1-13.657 5.657L4 16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 20H4v-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PlusIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#0b1a2b" strokeWidth="1.8">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  );
}
function CaretDown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="#0b1a2b" strokeWidth="1.6">
      <path d="M3 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function GridIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#0b1a2b" strokeWidth="1.6">
      <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
    </svg>
  );
}
function TwinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#0b1a2b" strokeWidth="1.6">
      <circle cx="8" cy="12" r="4" />
      <circle cx="16" cy="12" r="4" />
    </svg>
  );
}
function ListIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#0b1a2b" strokeWidth="1.6">
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}
