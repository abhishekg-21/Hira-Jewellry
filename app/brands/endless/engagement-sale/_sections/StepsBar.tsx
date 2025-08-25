// app/brands/endless/engagement-sale/_sections/StepsBar.tsx
export default function StepsBar() {
  const steps = [
    { n: 1, label: "Choose a Setting", icon: RingIcon },
    { n: 2, label: "Choose a Diamond", icon: DiamondIcon },
    { n: 3, label: "Complete Ring", icon: RingSetIcon },
  ];

  return (
    <nav aria-label="Build your ring steps" className="mb-5">
      <div className="rounded-[44px] border border-[#0b1a2b] overflow-hidden">
        <div className="grid grid-cols-3 divide-x divide-[#0b1a2b]/40 text-[#0b1a2b] bg-white">
          {steps.map(({ n, label, icon: Icon }) => (
            <div
              key={n}
              className="flex items-center justify-between px-6 py-4 sm:px-8"
            >
              {/* number + label (left side) */}
              <div className="flex items-center gap-4">
                <span className="text-3xl sm:text-4xl font-serif font-semibold leading-none">
                  {n}
                </span>
                <span className="text-base sm:text-lg font-medium tracking-tight whitespace-nowrap">
                  {label}
                </span>
              </div>

              {/* thin outline icon (right side) */}
              <Icon className="h-6 w-6 sm:h-7 sm:w-7 shrink-0 stroke-current" />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ---------- Minimal outline icons to match the reference ---------- */
function RingIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="14.5" r="5.5" strokeWidth="1.5" />
      <path d="M9.5 6.5 12 3l2.5 3.5h-5Z" strokeWidth="1.5" />
    </svg>
  );
}

function DiamondIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 5h10l3 4-8 10L4 9l3-4Z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M7 5 12 19 17 5" strokeWidth="1.5" />
      <path d="M4 9h16" strokeWidth="1.5" />
    </svg>
  );
}

function RingSetIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      {/* base ring */}
      <circle cx="12" cy="15" r="5.5" strokeWidth="1.5" />
      {/* small stone */}
      <path d="M10.5 7.5 12 5l1.5 2.5h-3Z" strokeWidth="1.5" />
      {/* tiny seat line */}
      <path d="M9.5 9h5" strokeWidth="1.5" />
    </svg>
  );
}
