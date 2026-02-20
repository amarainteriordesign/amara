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
    <div className="flex shrink-0 items-center justify-center px-[12px] text-[#9a9082] max-md:rotate-90 max-md:py-[8px]">
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

function PhaseColumn({
  number,
  title,
  subtitle,
  items,
}: {
  number: string;
  title: string;
  subtitle?: string;
  items: string[];
}) {
  return (
    <div className="min-w-0 flex-1 py-[24px]">
      <p className="font-display text-[13px] tracking-[0.5px] text-[#262626] max-sm:text-[11px]">
        PHASE {number}
      </p>
      <h4 className="mt-[8px] font-display text-[18px] leading-[24px] tracking-[0.3px] text-[#262626] max-sm:text-[15px] max-sm:leading-[20px]">
        {title}
      </h4>
      {subtitle && (
        <p className="mt-[2px] font-sans text-[14px] italic text-[#262626] max-sm:text-[12px]">
          {subtitle}
        </p>
      )}
      <ul className="mt-[16px] space-y-[8px]">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-[8px] font-sans text-[16px] leading-[26px] text-[#262626] max-sm:text-[14px] max-sm:leading-[22px]"
          >
            <span className="mt-[9px] block h-[5px] w-[5px] shrink-0 rounded-full bg-[#262626]" />
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

        <div
          className="flex items-stretch max-md:flex-col"
          onMouseLeave={() => {
            if (!isMobile) setIsExpanded(false);
          }}
        >
          {/* Design card — grows from narrow to 3/5 of the row */}
          <div
            className="cursor-pointer overflow-hidden rounded-[8px] border border-[#262626] bg-transparent transition-all duration-700 ease-in-out max-md:!w-full"
            style={{
              flex: isExpanded ? "3 1 0%" : "0 0 auto",
              width: isExpanded ? undefined : "15%",
            }}
            onMouseEnter={() => {
              if (!isMobile) setIsExpanded(true);
            }}
            onClick={() => {
              if (isMobile) setIsExpanded(!isExpanded);
            }}
          >
            {/* Collapsed label — visible when not expanded */}
            <div
              className="flex flex-col px-[20px] py-[24px] transition-all duration-500"
              style={{
                opacity: isExpanded ? 0 : 1,
                maxHeight: isExpanded ? "0px" : "400px",
                padding: isExpanded ? "0 20px" : undefined,
                overflow: "hidden",
              }}
            >
              <p className="font-display text-[13px] tracking-[0.5px] text-[#262626] max-sm:text-[11px]">
                PHASES 1 – 3
              </p>
              <h3 className="mt-[8px] font-display text-[18px] leading-[24px] tracking-[0.3px] text-[#262626] max-sm:text-[15px] max-sm:leading-[20px]">
                DESIGN
              </h3>
              <p className="mt-[8px] font-sans text-[16px] text-[#262626] max-md:hidden max-sm:text-[14px]">
                Hover to explore
              </p>
              <p className="mt-[8px] hidden font-sans text-[16px] text-[#262626] max-md:block max-sm:text-[14px]">
                Tap to explore
              </p>
              <ChevronDown className="mt-[12px] hidden text-[#262626] max-md:block" />
            </div>

            {/* Expanded content — phases 1-3 */}
            <div
              className="transition-all duration-700 ease-in-out"
              style={{
                opacity: isExpanded ? 1 : 0,
                maxHeight: isExpanded ? "800px" : "0px",
                overflow: "hidden",
              }}
            >
              <div className="relative px-[24px] max-sm:px-[16px]">
                <button
                  className="absolute right-[24px] top-[24px] hidden items-center gap-[4px] font-sans text-[12px] text-[#9a9082] max-md:flex max-sm:right-[16px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(false);
                  }}
                >
                  Collapse
                  <ChevronDown className="rotate-180 text-[#9a9082]" />
                </button>
                <div className="flex gap-[16px] max-md:flex-col max-md:gap-[20px]">
                  {designPhases.map((phase) => (
                    <PhaseColumn
                      key={phase.number}
                      number={phase.number}
                      title={phase.title}
                      items={phase.items}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <ArrowRight />

          {/* Phase 4 */}
          <div className="min-w-0 flex-1 px-[16px] max-md:px-[0px]">
            <PhaseColumn
              number={sourcingPhases[0].number}
              title={sourcingPhases[0].title}
              subtitle={sourcingPhases[0].subtitle}
              items={sourcingPhases[0].items}
            />
          </div>

          <ArrowRight />

          {/* Phase 5 */}
          <div className="min-w-0 flex-1 px-[16px] max-md:px-[0px]">
            <PhaseColumn
              number={sourcingPhases[1].number}
              title={sourcingPhases[1].title}
              subtitle={sourcingPhases[1].subtitle}
              items={sourcingPhases[1].items}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
