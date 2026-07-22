import TopNav from "./NavBar";

export default function MainLayout({ children }) {
  return (
    <div className="bg min-h-screen">
      <TopNav />

      <main className="pt-24 max-w-6xl mx-auto px-4">
        {children}
      </main>
    </div>
  );
}
