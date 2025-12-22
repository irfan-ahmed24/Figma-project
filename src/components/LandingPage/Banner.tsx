//import css file
import "../../styles/style.css";
import "../../styles/Banner.css"
import { GoArrowUpRight } from "react-icons/go";
function Banner() {
  return (
    <div className="position-relative container-fluid bg-color Banner-bg">
      <div className="py-0 py-lg-5 mt-0 start-0">
        <div className="container py-5 mt-0">
          <div className="text-center text-dark py-5 px-0 px-md-4">
            <div className="px-0 px-md-4">
                <h1 className="text-center my-4 h1-tag">Effortless <span className="text-primary">AI Automation SaaS</span> ChatBot No Code - Just Drag & Drop</h1>
                <p className="p2-tag my-4 mx-0 mx-md-5 px-0 px-md-5">Quickly customize and install an AI-powered chat widget on your website. Engage visitors, answer questions instantly, and boost conversions — all without writing a single line of code.</p>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-4">
              <button className="button-2">Get Started Free <GoArrowUpRight className="inline-block ms-2" /></button>
              <button className="button-1">Book A Demo <GoArrowUpRight className="inline-block ms-2" /></button>
            </div>
          </div>
          <div className="position-relative px-3">
            <img className="z-1 img-fluid" src="./contentImages/content-1.png" alt="" width="100%"/>
            <img className="robotImage d-none d-xl-block" src="./contentImages/robotImage.png" alt="" height="336px" width="371px"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
