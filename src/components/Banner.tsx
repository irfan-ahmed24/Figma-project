import "../styles/Banner.css";
import { GoArrowUpRight } from "react-icons/go";
function Banner() {
  return (
    <div className="position-relative">
      <img className="Banner-bg" src="../background/banner-bg.png" alt="Banner Background" />
      <div className="position-absolute top-0 start-0 w-100">
        <div className="container py-5 mt-5">
          <div className="text-center text-dark py-5 px-4">
            <h1 className="text-center">Effortless <span className="text-primary">AI Automation SaaS</span> ChatBot No Code - Just Drag & Drop</h1>
            <p className="text-center w-75 mx-auto">Quickly customize and install an AI-powered chat widget on your website. Engage visitors, answer questions instantly, and boost conversions — all without writing a single line of code.</p>
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-4">
              <button className="button-2">Get Started Free <GoArrowUpRight className="inline-block ms-2" /></button>
              <button className="button-1">Book A Demo <GoArrowUpRight className="inline-block ms-2" /></button>
            </div>
          </div>
          <div className="position-relative">
            <img className="z-1 img-fluid" src="./contentImages/content-1.png" alt="" width="100%"/>
            <img className="robotImage" src="./contentImages/robotImage.png" alt="" height="336px" width="371px"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
