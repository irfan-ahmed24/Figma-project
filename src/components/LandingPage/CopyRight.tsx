import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
function CopyRight() {
  return (
    <div className="Custom-bg py-3 lh-sm border-top">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="text-color">© Copyright. All rights reserved.</p>
        <div>
          <ul className="d-flex gap-3 list-unstyled">
            <li>
              <a href="">
                <FaFacebook className="fs-3" />
              </a>
            </li>

            <li>
              <a href="">
                <FaSquareXTwitter className="fs-3" />
              </a>
            </li>

            <li>
              <a href="">
                <FaLinkedinIn className="fs-3" />
              </a>
            </li>

            <li>
              <a href="">
                <FaPinterest className="fs-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CopyRight;
