//import css file
import "../../styles/style.css";

//react icons import
import { IoSunny } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

interface HeaderProps {
  onDarkMode: (isDark: boolean) => void;
}

function Header(props: HeaderProps) {
  props.onDarkMode;
  const [DarkMode, setIsDarkMode] = useState(false);
  const handleToggleDarkMode = () => {
    setIsDarkMode(!DarkMode);
    props.onDarkMode(!DarkMode);
  }

  return (
    <div className="Custom-bg position-fixed mx-auto screen-width top-0 z-2">
      <div className="container py-2 d-flex justify-content-between align-items-center">
        <h4 className="semi-bold fs-3">Nex AI</h4>
        <div>
          <IoMdMenu className="fs-3 d-lg-none" />
        </div>
        <div className="d-none d-lg-block">
          <ul className="d-flex justify-content-between list-unstyled mb-0">
            <li className="fs-6 bold mx-2 mx-xl-4">
              <a href="">
                Home
              </a>
            </li>
            <li className="fs-6 bold mx-2 mx-xl-4">
              <a href="">
                Product
              </a>
            </li>
            <li className="fs-6 bold mx-2 mx-xl-4">
              <a href="">
                Integrations
              </a>
            </li>
            <li className="fs-6 bold mx-2 mx-xl-4">
              <a href="">
                Resurge
              </a>
            </li>
            <li className="fs-6 bold mx-2 mx-xl-4">
              <a href="">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="d-none d-lg-flex justify-content-between align-items-center">
            <button onClick={handleToggleDarkMode} className="d-flex align-items-center border border-gray-300 rounded-circle p-2 p-xl-2 mx-1 mx-xl-3 bg-transparent">
              <IoSunny className="fs-5 fs-xl-4" />
            </button>
          <div className="relative mx-1 mx-xl-3">
            <select
              className="appearance-none bg-transparent border bold border-gray-300 px-2 py-2 rounded-full text-gray-700 focus:outline-none"
              name="language"
              id="language-select"
            >
              <option value="EN">EN</option>
              <option value="FR">FR</option>
              <option value="SP">SP</option>
            </select>
          </div>
          <div className="mx-1 mx-xl-3">
            <button className="button-1 bold px-2 px-xl-3 py-2">
              Sign in
              <GoArrowUpRight className="inline-block ms-2" />
            </button>
          </div>
          <div className="mx-1 mx-xl-3">
            <button className="button-2 bold px-2 px-xl-3 py-2">
              Get Started
              <GoArrowUpRight className="inline-block ms-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
