"use client";
import { useState, useEffect } from "react";
import SoundIcon from "@/components/icons/sound.svg";
import { formatTimeForOffset } from "@/helpers/time";

export default function ImmersiveJourney() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const interval = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#F1EBDF]">
      <div className="mx-auto w-full max-w-[1440px] px-[60px] py-[80px] max-md:px-[40px] max-md:py-[60px] max-sm:px-[20px] max-sm:py-[24px]">
        <div className="flex w-full max-w-[500px] flex-col items-start">
          <div className="relative flex w-full items-center pb-[20px] max-sm:pb-[12px]">
            <SoundIcon width={28} height={30} color="#262626" className="max-sm:w-[20px] max-sm:h-[22px]" />
            <SoundIcon width={28} height={30} color="#262626" className="ml-[-4.5755px] max-sm:w-[20px] max-sm:h-[22px]" />
          </div>
          <p className="w-full pb-[40px] font-sans text-[28px] leading-[36px] font-medium tracking-[-3%] text-[#262626] max-sm:text-[20px] max-sm:leading-[28px] max-sm:pb-[24px]">
            An immersive journey inspired by the story of the four{" "}
            <span className="text-[#737373]">elements</span>{" "}
          </p>

          <div className="flex w-full max-w-[340px] items-center justify-between max-sm:max-w-[280px]">
            {[
              { title: "Dubai", offset: 4 },
              { title: "Miami", offset: -5 },
              { title: "Paris", offset: 1 },
            ].map((item) => (
              <div className="flex items-baseline gap-[6px] max-sm:gap-[4px]" key={item.title}>
                <p className="font-sans text-[18px] leading-[26px] font-normal tracking-[-0.4px] text-[#737373] max-sm:text-[14px] max-sm:leading-[20px]">
                  {now && formatTimeForOffset(now, item.offset)}
                </p>
                <p className="font-sans text-[18px] leading-[26px] font-medium tracking-[-0.6px] text-[#262626] max-sm:text-[14px] max-sm:leading-[20px]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
