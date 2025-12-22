import { useEffect, useState } from "react";
// react icons import
import { IoSunny, IoMoon } from "react-icons/io5"; 
import { GoArrowUpRight } from "react-icons/go";
import { IoMdMenu } from "react-icons/io";
import "../../styles/style.css";

interface HeaderProps {
  onDarkMode: (isDark: boolean) => void;
}

function Header({ onDarkMode }: HeaderProps) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? true : false;
  });
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode"); 
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
    onDarkMode(isDark); 
  }, [isDark, onDarkMode]);

  const handleToggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="Custom-bg position-fixed mx-auto screen-width top-0 z-2">
      <div className="container py-4 d-flex justify-content-between align-items-center">
        <h4 className="nav-logo">Nex AI</h4>
        
        <div>
          <IoMdMenu className="fs-3 d-lg-none text-color" />
        </div>

        <div className="d-none d-lg-block">
          <ul className="d-flex justify-content-between list-unstyled mb-0">
            <li className="fs-6 bold mx-2 mx-xl-4"><a href="" className="nav-Link">Home</a></li>
            <li className="fs-6 bold mx-2 mx-xl-4"><a href="" className="nav-Link">Product</a></li>
            <li className="fs-6 bold mx-2 mx-xl-4"><a href="" className="nav-Link">Integrations</a></li>
            <li className="fs-6 bold mx-2 mx-xl-4"><a href="" className="nav-Link">Resurge</a></li>
            <li className="fs-6 bold mx-2 mx-xl-4"><a href="" className="nav-Link">Contact</a></li>
          </ul>
        </div>

        <div className="d-none d-lg-flex justify-content-between align-items-center">
          <button 
            onClick={handleToggleDarkMode} 
            className="d-flex light-icon align-items-center border border-gray-100 rounded-circle p-2 mx-1 mx-xl-3 bg-transparent"
          >
            {isDark ? (
              <IoMoon className="fs-4 text-warning" /> 
            ) : (
              <IoSunny className="fs-4 text-color" /> 
            )}
          </button>

          <div className="relative mx-1 mx-xl-3">
            <select
              className="appearance-none text-color bg-transparent border bold fs-5 border-gray-300 px-3 py-2 rounded-full focus:outline-none"
              name="language"
              id="language-select"
            >
              <option value="EN">EN</option>
              <option value="FR">FR</option>
              <option value="SP">SP</option>
            </select>
          </div>

          <div className="mx-1 mx-xl-3">
            <button className="button-1">
              Sign in <GoArrowUpRight className="inline-block ms-2" />
            </button>
          </div>
          <div className="mx-1 mx-xl-3">
            <button className="button-2">
              Get Started <GoArrowUpRight className="inline-block ms-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;