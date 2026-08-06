import { Outlet } from "react-router";

export function ProtectedLayout() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-7xl flex-col gap-4 p-4 md:p-8">
      <Outlet />
    </div>
  );
}
