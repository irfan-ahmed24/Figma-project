import { FaFacebook } from "react-icons/fa6";
function CopyRight() {
  return (
    <div className="Custom-bg py-3 lh-sm border-top">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p>© Copyright. All rights reserved.</p>
        <div>
          <ul className="d-flex gap-3 list-unstyled">
            <li>
              <a href="">
                <FaFacebook className="fs-3" />
              </a>
            </li>

            <li>
              <a href="">
                <FaFacebook className="fs-3" />
              </a>
            </li>

            <li>
              <a href="">
                <FaFacebook className="fs-3" />
              </a>
            </li>

            <li>
              <a href="">
                <FaFacebook className="fs-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CopyRight;
