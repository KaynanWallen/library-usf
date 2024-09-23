import { Outlet } from "@remix-run/react";

export default function Layout() {
  return (
    <>
      <div className="w-screen h-screen grid grid-rows-[100px_1fr_80px]">
        <header className="border-b bg-border">
        </header>
          <Outlet />
        <footer className="border-t bg-border">
        </footer>
      </div>
    </>
  )
}