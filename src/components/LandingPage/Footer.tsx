import { FaCommentDots } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";

function Footer() {
  return (
    <div className="Custom-bg py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="d-flex align-items-center gap-2">
              <FaCommentDots className="fs-2 text-primary"/>
              <h4 className="h4-tag">AIbotix</h4>
            </div>
            <p className="text-color p2-tag text-start">Facilizes sed odic morbid quiz odic commodore odic. Facilizes sed odic morbid quiz odic Facilizes sed odic</p>
            <h4 className="h4-tag">Join a Newsletter</h4>
            <div className="position-relative">
              <input type="text" className="form-control w-100 rounded-5 px-4 fs-5 d-inline-block" placeholder="Enter your email"/>
              <button className="button-2 position-absolute top-0 end-0 rounded-start">Subscribe</button>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-4">
            <h5 className="h5-tag">Contact Us</h5>
            <div className="d-flex flex-row gap-2 me-0 me-lg-5">
              <FaLocationDot className="text-primary fs-4"/>
              <p className="fs-6 p3-tag">100 avenue of the moon, 12 New York, NY 10018 US.</p>
            </div>
            <div className="d-flex flex-row gap-2">
              <MdOutlinePhone className="text-primary fs-4"/>
              <p className="fs-6 p3-tag">+02-574-328-301</p>
            </div>
            <div className="d-flex flex-row gap-2">
              <CiMail className="text-primary fs-4"/>
              <p className="fs-6 p3-tag">info@yoursite.com</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-2">
            <h5 className="h5-tag">Quick Links</h5>
            <ul className="list-unstyled fs-5">
              <li><a href="" className="text-decoration-none mb-2 text-color">Home</a></li>
              <li><a href="" className="text-decoration-none mb-2 text-color">About Us</a></li>
              <li><a href="" className="text-decoration-none mb-2 text-color">Shop</a></li>
              <li><a href="" className="text-decoration-none mb-2 text-color">Our Blog</a></li>
              <li><a href="" className="text-decoration-none mb-2 text-color">Return Policy</a></li>
              <li><a href="" className="text-decoration-none mb-2 text-color">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-xl-2">
            <h5 className="h5-tag">Service</h5>
            <ul className="list-unstyled fs-5">
              <li className="mb-2 text-color">AI Chat Widget</li>
              <li className="mb-2 text-color">Text To imges</li>
              <li className="mb-2 text-color">Customize Ai Assistant</li>
              <li className="mb-2 text-color">AI Plugin</li>
              <li className="mb-2 text-color">Text To Audio</li>
              <li className="mb-2 text-color">AI Assistant</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
