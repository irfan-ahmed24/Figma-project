//import css file
import "../styles/style.css";
import { GoArrowUpRight } from "react-icons/go";
function InstallSection() {
  return (
    <div className="screen-width">
      <div className="container">
        <h1 className="w-75 mx-auto text-center">One-click chatbot widget for website and <span className="text-primary">online store</span></h1>
        <div className="mt-5 grid d-flex flex-column flex-md-row justify-content-center align-items-center gap-4">
            <div className="col-12 col-md-6 p-0 p-sm-5 d-flex justify-content-end">
              <img className="img-fluid" src="./contentImages/chatBox.png" alt="Install Widget" />
            </div>
            <div className="col-12 col-md-6 text-center text-md-start">
                <h3 className="mb-3">Install on your website</h3>
                <p className="mb-3">Add a code snippet to your website, and you’re ready to automate your customer service with AI! Easily connect with many web and ecommerce platforms.</p>
                <button className="button-2">Install Now <GoArrowUpRight className="inline-block ms-2" /></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default InstallSection
