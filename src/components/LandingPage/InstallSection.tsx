//import css file
import "../../styles/style.css";
import { GoArrowUpRight } from "react-icons/go";
function InstallSection() {
  return (
    <div className="screen-width py-3 bg-color">
      <div className="container">
        <h2 className="mx-auto col-12 col-lg-9 h2-tag">One-click chatbot widget for website and <span className="text-primary">online store</span></h2>
        <div className="mt-5 grid d-flex flex-column flex-md-row justify-content-center align-items-center gap-4">
            <div className="col-12 col-md-6 p-0 p-sm-5 d-flex justify-content-end">
              <img className="img-fluid" src="./contentImages/chatBox.png" alt="Install Widget" />
            </div>
            <div className="col-12 col-md-6 text-center text-md-start">
                <h5 className="mb-3 h3-tag">Install on your website</h5>
                <p className="mb-3 p2-tag text-lg-start">Add a code snippet to your website, and you’re ready to automate your customer service with AI! Easily connect with many web and ecommerce platforms.</p>
                <button className="button-2">Install Now <GoArrowUpRight className="inline-block ms-2" /></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default InstallSection
