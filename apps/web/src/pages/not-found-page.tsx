import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <div
      className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-   
  center"
    >
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-gray-600">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="rounded bg-brand px-6 py-3 font-semibold text-white hover:bg-brand/80"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
