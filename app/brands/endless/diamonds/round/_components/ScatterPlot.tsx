// app/diamonds/round/_components/ScatterPlot.tsx
"use client";

import { useMemo, useState } from "react";

/* ---- style helpers ---- */
const NAVY = "#0b1a2b";
const pct = (val: number, min: number, max: number) =>
  ((val - min) / (max - min)) * 100;

function InfoDot() {
  return (
    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#0b1a2b] text-[10px] leading-none text-[#0b1a2b]">
      i
    </span>
  );
}

/* ---- discrete slider primitive (two handles) ---- */
function DiscreteSlider({
  values,
  minIndex,
  maxIndex,
  onChange,
  dimUntil = -1,
}: {
  values: string[];
  minIndex: number;
  maxIndex: number;
  onChange: (a: number, b: number) => void;
  dimUntil?: number;
}) {
  const last = values.length - 1;
  const left = useMemo(() => (minIndex / last) * 100, [minIndex, last]);
  const right = useMemo(() => 100 - (maxIndex / last) * 100, [maxIndex, last]);

  return (
    <div>
      <div className="mb-2 flex justify-between text-[12px]">
        {values.map((v, i) => (
          <span
            key={v}
            className={[
              "w-8 text-center",
              i <= dimUntil ? "text-neutral-300" : "text-[#0b1a2b]",
            ].join(" ")}
          >
            {v}
          </span>
        ))}
      </div>

      <div className="relative h-8">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-neutral-200" />
        <div
          className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-[#0b1a2b]"
          style={{ left: `${left}%`, right: `${right}%` }}
        />

        <input
          type="range"
          min={0}
          max={last}
          step={1}
          value={minIndex}
          onChange={(e) => onChange(Math.min(+e.target.value, maxIndex), maxIndex)}
          className="absolute inset-0 w-full appearance-none bg-transparent pointer-events-none
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#0b1a2b]
            [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0b1a2b]
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4
            [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#0b1a2b]
            [&::-moz-range-thumb]:pointer-events-auto"
        />
        <input
          type="range"
          min={0}
          max={last}
          step={1}
          value={maxIndex}
          onChange={(e) => onChange(minIndex, Math.max(+e.target.value, minIndex))}
          className="absolute inset-0 w-full appearance-none bg-transparent pointer-events-none
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#0b1a2b]
            [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0b1a2b]
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4
            [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#0b1a2b]
            [&::-moz-range-thumb]:pointer-events-auto"
        />
      </div>
    </div>
  );
}

/* ---- main component ---- */
export default function ScatterPlot() {
  /* Carat */
  const CARAT_MIN = 0;
  const CARAT_MAX = 30;
  const [caratMin, setCaratMin] = useState(1);
  const [caratMax, setCaratMax] = useState(30);

  const caratLeft = useMemo(
    () => pct(caratMin, CARAT_MIN, CARAT_MAX),
    [caratMin]
  );
  const caratRight = useMemo(
    () => 100 - pct(caratMax, CARAT_MIN, CARAT_MAX),
    [caratMax]
  );

  /* Color (K → D) */
  const COLOR = ["K", "J", "I", "H", "G", "F", "E", "D"];
  const [colorMin, setColorMin] = useState(3); // H
  const [colorMax, setColorMax] = useState(7); // D

  /* Clarity (SI2 → FL) */
  const CLARITY = ["SI2", "SI1", "VS2", "VS1", "VVS2", "VVS1", "IF", "FL"];
  const [clarityMin, setClarityMin] = useState(2); // VS2
  const [clarityMax, setClarityMax] = useState(7); // FL

  /* Cut (Good → Astor) */
  const CUT = ["Good", "Very Good", "Excellent", "Astor"];
  const [cutMin, setCutMin] = useState(1); // Very Good
  const [cutMax, setCutMax] = useState(3); // Astor

  return (
    /* FULL-BLEED WRAPPER */
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
      {/* side padding so content doesn't touch edges */}
      <div className="px-4 sm:px-6 lg:px-8">
        <section className=" p-4 sm:p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Carat */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <h4 className="text-[14px] font-semibold text-[#0b1a2b]">Carat</h4>
                <InfoDot />
              </div>

              <div className="mb-2 flex items-start justify-between text-[12px] text-neutral-500">
                <div>
                  <div className="mb-1">Min Carat</div>
                  <input
                    value={caratMin.toFixed(2)}
                    onChange={(e) => {
                      const v = Math.max(
                        CARAT_MIN,
                        Math.min(parseFloat(e.target.value) || 0, caratMax)
                      );
                      setCaratMin(v);
                    }}
                    className="rounded-lg border px-3 py-1.5 text-[14px] font-medium shadow-sm w-[90px] text-[#0b1a2b]"
                  />
                </div>
                <div className="text-right">
                  <div className="mb-1">Max Carat</div>
                  <input
                    value={caratMax.toFixed(2)}
                    onChange={(e) => {
                      const v = Math.min(
                        CARAT_MAX,
                        Math.max(parseFloat(e.target.value) || 0, caratMin)
                      );
                      setCaratMax(v);
                    }}
                    className="rounded-lg border px-3 py-1.5 text-[14px] font-medium shadow-sm w-[90px] text-[#0b1a2b]"
                  />
                </div>
              </div>

              <div className="relative mt-4 h-8">
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-neutral-200" />
                <div
                  className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-[#0b1a2b]"
                  style={{ left: `${caratLeft}%`, right: `${caratRight}%` }}
                />
                <input
                  type="range"
                  min={CARAT_MIN}
                  max={CARAT_MAX}
                  step={0.01}
                  value={caratMin}
                  onChange={(e) =>
                    setCaratMin(Math.min(parseFloat(e.target.value), caratMax))
                  }
                  className="absolute inset-0 w-full appearance-none bg-transparent pointer-events-none
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
                    [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#0b1a2b]
                    [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0b1a2b]
                    [&::-webkit-slider-thumb]:pointer-events-auto
                    [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4
                    [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#0b1a2b]
                    [&::-moz-range-thumb]:pointer-events-auto"
                />
                <input
                  type="range"
                  min={CARAT_MIN}
                  max={CARAT_MAX}
                  step={0.01}
                  value={caratMax}
                  onChange={(e) =>
                    setCaratMax(Math.max(parseFloat(e.target.value), caratMin))
                  }
                  className="absolute inset-0 w-full appearance-none bg-transparent pointer-events-none
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
                    [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#0b1a2b]
                    [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0b1a2b]
                    [&::-webkit-slider-thumb]:pointer-events-auto
                    [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4
                    [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#0b1a2b]
                    [&::-moz-range-thumb]:pointer-events-auto"
                />
              </div>
            </div>

            {/* Color */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <h4 className="text-[14px] font-semibold text-[#0b1a2b]">Color</h4>
                <InfoDot />
              </div>
              <DiscreteSlider
                values={COLOR}
                minIndex={colorMin}
                maxIndex={colorMax}
                dimUntil={2}
                onChange={(a, b) => {
                  setColorMin(Math.min(a, b));
                  setColorMax(Math.max(a, b));
                }}
              />
            </div>

            {/* Clarity */}
            <div>
              <div className="mb-3 mt-4 flex items-center gap-2">
                <h4 className="text-[14px] font-semibold text-[#0b1a2b]">Clarity</h4>
                <InfoDot />
              </div>
              <DiscreteSlider
                values={CLARITY}
                minIndex={clarityMin}
                maxIndex={clarityMax}
                onChange={(a, b) => {
                  setClarityMin(Math.min(a, b));
                  setClarityMax(Math.max(a, b));
                }}
              />
            </div>

            {/* Cut */}
            <div>
              <div className="mb-3 mt-4 flex items-center gap-2">
                <h4 className="text-[14px] font-semibold text-[#0b1a2b]">Cut</h4>
                <InfoDot />
              </div>
              <DiscreteSlider
                values={CUT}
                minIndex={cutMin}
                maxIndex={cutMax}
                dimUntil={0}
                onChange={(a, b) => {
                  setCutMin(Math.min(a, b));
                  setCutMax(Math.max(a, b));
                }}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
