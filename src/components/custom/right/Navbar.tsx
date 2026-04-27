import React from "react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-off-white/90 backdrop-blur-md px-11 py-7 flex items-center justify-between transition-all duration-300 ease-in-out border-b border-transparent">
      {/* Brand */}
      <div className="font-mono text-xs md:text-sm uppercase tracking-widest text-text-primary">
        Aryan Shaw
      </div>

      {/* Links */}
      <div className="flex gap-6 md:gap-10">
        {["Hero", "Work", "About"].map((item) => (
          <button
            key={item}
            className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-text-primary transition-colors duration-200 cursor-pointer"
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
