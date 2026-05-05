import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/2b8acccb9353ba07dbdf1aac581ca3d988d7125f.png";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const navLinks = [
  { label: "Ana səhifə", to: "/" },
  { label: "Haqqımızda", to: "/about" },
  { label: "Xidmətlər", to: "/services" },
  { label: "Psixoloqlar", to: "/psychologists" },
  { label: "Testlər", to: "/tests" },
  { label: "Bloq", to: "/blog" },
  { label: "Əlaqə", to: "/contact" },
];

  return (
    <div className="w-full bg-[#E8F5E9] relative">
      <div className="max-w-[1440px] mx-auto min-h-[78px] px-4 md:px-6 xl:px-[105px] border-b border-[#E0E0E0]">
        <div className="max-w-[1231px] mx-auto min-h-[76px] flex items-center justify-between gap-3 md:gap-4 xl:gap-[72px]">
          {/* LOGO */}
          <NavLink to="/" className="shrink-0">
            <img className="h-auto max-h-[50px] w-auto" src={logo} alt="logo" />
          </NavLink>

          {/* MENU */}
          <div className="hidden md:flex min-w-0 flex-1 items-center justify-center gap-2 xl:gap-6 2xl:gap-8 whitespace-nowrap">
         {navLinks.map((link) => (
<NavLink
  key={link.label}
  to={link.to}
  end
  className={({ isActive }) =>
    `text-[12px] xl:text-base transition-colors duration-200 hover:text-[#1B1B1B] ${
      isActive ? "text-[#1B1B1B] font-medium" : "text-[#6B7280]"
    }`
  }
>
  {link.label}
</NavLink>
))}
          </div>

          {/* BUTTON + MOBILE ICON */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button className="hidden md:inline-flex items-center justify-center px-4 xl:px-6 h-[40px] md:h-[42px] xl:h-[44px] rounded-full bg-[#4CAF50] text-white text-sm md:text-[14px] xl:text-base whitespace-nowrap">
              Seansa yazıl
            </button>

            {/* MOBILE MENU ICON */}
            <button
              type="button"
              className="md:hidden flex items-center justify-center text-[#1B1B1B] text-2xl cursor-pointer"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#E8F5E9] border-b border-[#E0E0E0] shadow-sm z-20">
          <div className="max-w-[1440px] mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `text-[12px] xl:text-base transition-colors duration-200 hover:text-[#1B1B1B] ${
                    isActive ? "text-[#1B1B1B] font-medium" : "text-[#6B7280]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <button className="sm:hidden w-full h-[42px] rounded-full bg-[#4CAF50] text-white text-sm">
              Seansa yazıl
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
