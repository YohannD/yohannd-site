import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center justify-center px-6 py-40 text-center">
      <p className="mb-4 font-mono text-sm text-brand-400">404</p>
      <h1 className="mb-4 text-3xl font-semibold text-neutral-50">
        Page not found
      </h1>
      <p className="mb-8 text-neutral-400">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-500"
      >
        Back home
      </Link>
    </div>
  );
}
