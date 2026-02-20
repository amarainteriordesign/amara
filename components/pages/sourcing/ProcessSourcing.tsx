"use client";
import { useState } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

const designPhases = [
  {
    number: "1",
    title: "BRIEFING & DESIGN DIRECTION",
    items: [
      "Lifestyle & vision exploration",
      "Two creative directions",
      "Material & palette proposal",
      "Layout & furniture direction",
    ],
  },
  {
    number: "2",
    title: "CONCEPTUAL DESIGN DEVELOPMENT",
    items: [
      "2D conceptual layouts",
      "Preliminary GA drawings",
      "Elevation sketches",
      "Visual storytelling boards",
    ],
  },
  {
    number: "3",
    title: "DETAIL DESIGN",
    items: [
      "Final furniture layout",
      "Ceiling & flooring plans",
      "Electrical layout",
      "Finishes schedule",
      "3D renderings",
    ],
  },
];

const sourcingPhases = [
  {
    number: "4",
    title: "PROCUREMENT & LOGISTICS",
    subtitle: "(Optional)",
    items: [
      "Full FF&E schedule",
      "Lighting & OS&E sourcing",
      "Ordering & tracking",
      "Vendor coordination",
      "Warehouse consolidation",
    ],
  },
  {
    number: "5",
    title: "SITE & INSTALLATION SUPERVISION",
    subtitle: "(Optional)",
    items: [
      "Site visits",
      "Contractor coordination",
      "Installation oversight",
      "Final styling",
      "Handover & punch list",
    ],
  },
];

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <div className="flex items-center justify-center px-[12px] text-[#9a9082] max-md:rotate-90 max-md:py-[8px]">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12H19M19 12L13 6M19 12L13 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}


function PhaseCard({
  phase,
}: {
  phase: (typeof sourcingPhases)[0];
}) {
  return (
    <div className="flex-1 px-[16px] py-[24px] max-md:px-[0px]">
      <p className="font-display text-[11px] tracking-[0.5px] text-[#9a9082]">
        PHASE {phase.number}
      </p>
      <h4 className="mt-[8px] font-display text-[16px] leading-[22px] tracking-[0.3px] text-[#262626] max-sm:text-[14px]">
        {phase.title}
      </h4>
      {phase.subtitle && (
        <p className="mt-[2px] font-sans text-[12px] italic text-[#9a9082]">
          {phase.subtitle}
        </p>
      )}
      <ul className="mt-[16px] space-y-[8px]">
        {phase.items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-[8px] font-sans text-[13px] leading-[20px] text-[#4a4a4a] max-sm:text-[12px]"
          >
            <span className="mt-[7px] block h-[4px] w-[4px] shrink-0 rounded-full bg-[#9a9082]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProcessSourcing() {
  const [isExpanded, setIsExpanded] = useState(false);
  const screenSize = useWindowSize();
  const isMobile = screenSize.width > 0 && screenSize.width < 960;

  return (
    <section className="w-full bg-[#f1ebdf] py-[100px] max-md:py-[60px] max-sm:py-[40px]">
      <div className="mx-auto max-w-[1100px] px-[60px] max-md:px-[40px] max-sm:px-[20px]">
        <div className="mb-[60px] text-center max-md:mb-[40px]">
          <h2 className="font-display text-[36px] leading-[44px] tracking-[0.5px] text-[#262626] max-sm:text-[26px] max-sm:leading-[34px]">
            INTERIOR DESIGN PROCESS
          </h2>
          <p className="mt-[12px] font-calvino text-[16px] tracking-[-0.2px] text-[#4a4a4a] max-sm:text-[14px]">
            From Vision to Final Styling
          </p>
        </div>

        {/* Collapsed view: narrow Design card + arrow + Phase 4 + arrow + Phase 5 */}
        <div
          className={`flex items-stretch transition-all duration-500 max-md:flex-col max-md:items-stretch ${isExpanded ? "max-h-0 overflow-hidden opacity-0" : "max-h-[800px] opacity-100"}`}
        >
          <div
            className="w-[200px] shrink-0 cursor-pointer rounded-[8px] border border-[#d4cdc2] bg-[#e8dfd2] max-md:w-full"
            onMouseEnter={() => {
              if (!isMobile) setIsExpanded(true);
            }}
            onClick={() => {
              if (isMobile) setIsExpanded(!isExpanded);
            }}
          >
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center px-[20px] py-[40px] max-md:min-h-[200px] max-sm:py-[32px]">
              <p className="font-display text-[11px] tracking-[0.5px] text-[#9a9082]">
                PHASES 1 – 3
              </p>
              <h3 className="mt-[12px] font-display text-[28px] tracking-[0.5px] text-[#262626] max-sm:text-[22px]">
                DESIGN
              </h3>
              <p className="mt-[8px] font-sans text-[13px] text-[#9a9082] max-md:hidden">
                Hover to explore
              </p>
              <p className="mt-[8px] hidden font-sans text-[13px] text-[#9a9082] max-md:block">
                Tap to explore
              </p>
              <ChevronDown className="mt-[12px] hidden text-[#9a9082] max-md:block" />
            </div>
          </div>

          <ArrowRight />

          <PhaseCard phase={sourcingPhases[0]} />

          <ArrowRight />

          <PhaseCard phase={sourcingPhases[1]} />
        </div>

        {/* Expanded view: all 5 phases equal width */}
        <div
          className={`transition-all duration-500 ${isExpanded ? "max-h-[1200px] opacity-100" : "max-h-0 overflow-hidden opacity-0"}`}
          onMouseLeave={() => {
            if (!isMobile) setIsExpanded(false);
          }}
        >
          <div className="rounded-[8px] border border-[#d4cdc2] bg-[#e8dfd2] px-[24px] py-[24px] max-sm:px-[16px]">
            <div className="mb-[16px] flex items-center justify-between">
              <p className="font-display text-[11px] tracking-[0.5px] text-[#9a9082]">
                ALL PHASES
              </p>
              <button
                className="hidden items-center gap-[4px] font-sans text-[12px] text-[#9a9082] max-md:flex"
                onClick={() => setIsExpanded(false)}
              >
                Collapse
                <ChevronDown className="rotate-180 text-[#9a9082]" />
              </button>
            </div>
            <div className="flex gap-[16px] max-md:flex-col max-md:gap-[24px]">
              {[...designPhases, ...sourcingPhases].map((phase) => (
                <div key={phase.number} className="flex-1">
                  <p className="font-display text-[11px] tracking-[0.5px] text-[#9a9082]">
                    PHASE {phase.number}
                  </p>
                  <h4 className="mt-[6px] font-display text-[13px] leading-[18px] tracking-[0.3px] text-[#262626] max-sm:text-[12px]">
                    {phase.title}
                  </h4>
                  {"subtitle" in phase && (phase as typeof sourcingPhases[0]).subtitle && (
                    <p className="mt-[2px] font-sans text-[11px] italic text-[#9a9082]">
                      {(phase as typeof sourcingPhases[0]).subtitle}
                    </p>
                  )}
                  <ul className="mt-[12px] space-y-[6px]">
                    {phase.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-[6px] font-sans text-[12px] leading-[18px] text-[#4a4a4a] max-sm:text-[11px]"
                      >
                        <span className="mt-[6px] block h-[3px] w-[3px] shrink-0 rounded-full bg-[#9a9082]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
