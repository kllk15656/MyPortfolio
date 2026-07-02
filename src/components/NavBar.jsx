// import the navigate from react


export default function TopNav() {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl font-semibold text-purple-600">
          Kristine.dev
        </h1>

        {/* Links */}
        <ul className="flex items-center gap-6 text-gray-700 font-medium">
          <li><a href="/" className="hover:text-purple-600">Home</a></li>
          <li><a href="/about" className="hover:text-purple-600">About</a></li>
          <li><a href="/projects" className="hover:text-purple-600">Projects</a></li>
          <li><a href="/contact" className="hover:text-purple-600">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}