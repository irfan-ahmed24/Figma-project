import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
function ReviewCard() {
  return (
      <div className="mb-3">
        <div
          className="card shadow-sm p-5 position-relative"
        >
          <div className="position-absolute top-0 end-0 m-5 text-primary mb-3">
            <FaQuoteLeft size={25} />
          </div>
          <div className="d-flex align-items-center mb-3">
            <div className="image-div">
              <img
              src="./contentImages/JhonButtle.jpg"
              className="user-image"
              alt="Reviewer Avatar"
              height="50px"
              width="50px"
            />
            </div>
            <div>
              <p className="mb-0 fw-bold text-color h5-tag">Jos Butler</p>
              <small className="text-color text-color p2-tag">Developer</small>
            </div>
          </div>

          <div className="text-warning my-3">
            <FaStar size={25}/>
            <FaStar size={25}/>
            <FaStar size={25}/>
            <FaStar size={25}/>
            <FaStar size={25}/>
          </div>
          <p className="my-3 text-color p2-tag text-start">
            The setup process was shockingly simple. Within a day, our chatbot
            was live on our site and already handling conversations we noticed.
          </p>
        </div>
      </div>
  );
}

export default ReviewCard;
