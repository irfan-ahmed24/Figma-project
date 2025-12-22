import { FaCommentDots } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";

function Footer() {
  return (
    <div className="Custom-bg py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="d-flex align-items-center gap-2">
              <FaCommentDots className="fs-2 text-primary" />
              <h4 className="h5-tag">AIbotix</h4>
            </div>
            <p className="text-color p2-tag text-start">
              Facilizes sed odic morbid quiz odic commodore odic. Facilizes sed
              odic morbid quiz odic Facilizes sed odic
            </p>
            <h4 className="h5-tag">Join a Newsletter</h4>
            <div className="newsletter-container">
              <div className="position-relative d-flex align-items-center">
                <input
                  type="email"
                  className="form-control newsletter-input shadow-none"
                  placeholder="Your E-mail"
                />
                <button className="newsletter-btn">
                  Subscribe <GoArrowUpRight className="ms-2" />
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-4">
            <h5 className="h5-tag">Contact Us</h5>
            <div className="d-flex flex-row gap-2 me-0 me-lg-5">
              <FaLocationDot className="text-primary fs-4" />
              <p className="fs-6 p2-tag text-start">
                100 avenue of the moon, 12 New York, NY 10018 US.
              </p>
            </div>
            <div className="d-flex flex-row gap-2">
              <MdOutlinePhone className="text-primary fs-4" />
              <p className="fs-6 p2-tag text-start">+02-574-328-301</p>
            </div>
            <div className="d-flex flex-row gap-2">
              <CiMail className="text-primary fs-4" />
              <p className="fs-6 p2-tag text-start">info@yoursite.com</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-2">
            <h5 className="h5-tag">Quick Links</h5>
            <ul className="list-unstyled fs-5">
              <li>
                <a
                  href=""
                  className="text-decoration-none mb-2 text-color p2-tag"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-decoration-none mb-2 text-color p2-tag"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-decoration-none mb-2 text-color p2-tag"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-decoration-none mb-2 text-color p2-tag"
                >
                  Our Blog
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-decoration-none mb-2 text-color p2-tag"
                >
                  Return Policy
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-decoration-none mb-2 text-color p2-tag"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-xl-2">
            <h5 className="h5-tag">Service</h5>
            <ul className="list-unstyled fs-5">
              <li className="mb-2 text-color p2-tag text-start">
                AI Chat Widget
              </li>
              <li className="mb-2 text-color p2-tag text-start">
                Text To imges
              </li>
              <li className="mb-2 text-color p2-tag text-start">
                Customize Ai Assistant
              </li>
              <li className="mb-2 text-color p2-tag text-start">AI Plugin</li>
              <li className="mb-2 text-color p2-tag text-start">
                Text To Audio
              </li>
              <li className="mb-2 text-color p2-tag text-start">
                AI Assistant
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
