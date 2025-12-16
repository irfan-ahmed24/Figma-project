import { FaRegUser } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
function Resources() {
  return (
    <div className="bg-color">
      <div className="container py-5">
        <div className="row mb-5">
          <div className="mx-auto col-12 col-lg-8">
            <h2 className="fw-bold mb-3">
              Useful
              <span className="text-primary"> Resources & Articles</span>
            </h2>
            <p className="text-muted">
              Quickly customize and install an AI-powered chat widget on your
              website. Engage visitors, answer questions instantly.
            </p>
          </div>
          <div className="mx-auto col-12 col-lg-4 text-start text-lg-end align-self-start align-self-lg-end fs-6 fs-lg-5">
            <button className="button-2">See All Blogs</button>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-column flex-lg-row gap-4">
          <div className="border border-1 pb-3 rounded-3 resource-card">
            <div>
              <img
                className="img-fluid"
                src="./contentImages/blogPic1.jpg"
                alt=""
              />
            </div>
            <div className="d-flex border border-1 pt-3 px-3 flex-row flex-lg-column flex-xl-row justify-content-between">
              <div className="d-flex justify-content-between justify-content-lg-start justify-content-xl-between">
                <FaRegUser className="fs-4 me-3"/>
                <p>By Admin</p>
              </div>
              <div className="d-flex justify-content-between justify-content-lg-start justify-content-xl-between">
                <MdOutlineDateRange className="fs-4 me-3"/>
                <p>January 1, 2024</p>
              </div>
            </div>
            <div className="px-3">
              <h5 className="lh-sm my-4">
                Transform Your Customer Support with AI Chatbots
              </h5>
              <p className="text-muted lh-sm">
                AI chatbots help businesses provide instan consistent, and efficient support around the clock. Instead of making...
              </p>
              <a href="" className="fs-5 bold">Read More</a>
            </div>
          </div>

          <div className="border border-1 pb-3 rounded-3 resource-card">
            <div>
              <img
                className="img-fluid"
                src="./contentImages/blogPic2.jpg"
                alt=""
              />
            </div>
            <div className="d-flex border border-1 pt-3 px-3 flex-row flex-lg-column flex-xl-row justify-content-between">
              <div className="d-flex justify-content-between justify-content-lg-start justify-content-xl-between">
                <FaRegUser className="fs-4 me-3"/>
                <p>By Admin</p>
              </div>
              <div className="d-flex justify-content-between justify-content-lg-start justify-content-xl-between">
                <MdOutlineDateRange className="fs-4 me-3"/>
                <p>January 1, 2024</p>
              </div>
            </div>
            <div className="px-3">
              <h5 className="lh-sm my-4">
                Transform Your Customer Support with AI Chatbots
              </h5>
              <p className="text-muted lh-sm">
                AI chatbots help businesses provide instan consistent, and efficient support around the clock. Instead of making...
              </p>
              <a href="" className="fs-5 bold">Read More</a>
            </div>
          </div>

          <div className="border border-1 pb-3 rounded-3 resource-card">
            <div>
              <img
                className="img-fluid"
                src="./contentImages/blogPic3.jpg"
                alt=""
              />
            </div>
            <div className="d-flex border border-1 pt-3 px-3 flex-row flex-lg-column flex-xl-row justify-content-between">
              <div className="d-flex justify-content-between justify-content-lg-start justify-content-xl-between">
                <FaRegUser className="fs-4 me-3"/>
                <p>By Admin</p>
              </div>
              <div className="d-flex justify-content-between justify-content-lg-start justify-content-xl-between">
                <MdOutlineDateRange className="fs-4 me-3"/>
                <p>January 1, 2024</p>
              </div>
            </div>
            <div className="px-3">
              <h5 className="lh-sm my-4">
                Transform Your Customer Support with AI Chatbots
              </h5>
              <p className="text-muted lh-sm">
                AI chatbots help businesses provide instan consistent, and efficient support around the clock. Instead of making...
              </p>
              <a href="" className="fs-5 bold">Read More</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Resources;
