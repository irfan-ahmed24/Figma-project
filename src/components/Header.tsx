//import css file
import "../styles/style.css";

//react icons import
import { IoSunny } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";

function Header() {
  return (
    <div className="light-nav-bg position-fixed mx-auto screen-width top-0 z-1">
      <div className="container d-flex justify-content-between align-items-center">
        <h4 className="semi-bold fs-3">Nex AI</h4>
        <div>
          <ul className="d-flex justify-content-between list-unstyled mb-0">
            <li className="fs-6 bold mx-4">
              <a href="" className="text-decoration-none text-black">
                Home
              </a>
            </li>
            <li className="fs-6 bold mx-4">
              <a href="" className="text-decoration-none text-black">
                Product
              </a>
            </li>
            <li className="fs-6 bold mx-4">
              <a href="" className="text-decoration-none text-black">
                Integrations
              </a>
            </li>
            <li className="fs-6 bold mx-4">
              <a href="" className="text-decoration-none text-black">
                Resurge
              </a>
            </li>
            <li className="fs-6 bold mx-4">
              <a href="" className="text-decoration-none text-black">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center border border-gray-300 rounded-circle p-3 mx-2">
            <IoSunny className="fs-4" />
          </div>
          <div className="relative mx-2">
            <select
              className="appearance-none bg-transparent border bold border-gray-300 px-4 py-2 rounded-full text-gray-700 focus:outline-none"
              name="language"
              id="language-select"
            >
              <option value="EN">EN</option>
              <option value="FR">FR</option>
              <option value="SP">SP</option>
            </select>
          </div>
          <div className="mx-2">
            <button className="border-2 border-primary text-primary bg-transparent bold px-4 py-2 rounded-full">
              Sign in
              <GoArrowUpRight className="inline-block ms-2" />
            </button>
          </div>
          <div className="mx-2">
            <button className="border-0 text-white bg-primary bold px-4 py-2 rounded-full">
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
