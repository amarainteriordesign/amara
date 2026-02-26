"use client";

export default function NewsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#F5F1ED] px-[20px]">
      <h1
        className="mb-[16px] text-[32px] leading-[40px] font-normal tracking-[-1px] text-[#262626]"
        style={{ fontFamily: "var(--font-lora)" }}
      >
        Article unavailable
      </h1>
      <p className="mb-[32px] max-w-[400px] text-center font-sans text-[15px] leading-[24px] font-normal text-[#666]">
        We couldn&apos;t load this article. Please try again or browse our latest news.
      </p>
      <div className="flex items-center gap-[16px]">
        <button
          onClick={() => reset()}
          className="rounded-full bg-[#9B9284] px-[24px] py-[10px] font-sans text-[13px] leading-[18px] font-normal text-[#FFF] transition-all duration-300 hover:bg-[#8B8170]"
        >
          Try again
        </button>
        <a
          href="/news"
          className="rounded-full border border-[#9B9284] px-[24px] py-[10px] font-sans text-[13px] leading-[18px] font-normal text-[#9B9284] transition-all duration-300 hover:bg-[#9B9284] hover:text-white"
        >
          Browse news
        </a>
      </div>
    </div>
  );
}
