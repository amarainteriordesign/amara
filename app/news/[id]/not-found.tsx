import Link from "next/link";
import Header from "@/components/layout/Header";

export default function NotFound() {
  return (
    <>
      <Header />

      <div className="flex min-h-screen flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-diranista mb-4 text-6xl font-bold text-gray-900">404</h1>
          <h2 className="mb-6 font-serif text-2xl text-gray-700">Article Not Found</h2>
          <p className="mb-8 max-w-md text-gray-600">
            The article you&#39;re looking for doesn&#39;t exist or may have been removed.
          </p>
          <Link
            href="/news"
            className="inline-block rounded bg-gray-900 px-6 py-3 text-white transition-colors hover:bg-gray-800"
          >
            Back to News
          </Link>
        </div>
      </div>
    </>
  );
}
