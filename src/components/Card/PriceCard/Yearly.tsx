import { IoIosCheckmarkCircle } from "react-icons/io";

function Yearly(props: { onYearly: boolean }) {
  const { onYearly } = props;
  return (
    <>
      <div
        className={`d-flex flex-column flex-md-row gap-4 align-items-center justify-content-center ${
          onYearly ? "" : "d-none"
        }`}
      >
        <div className={`col-12 col-md-4 fit-height p-4 price-card`}>
          <h3 className="h4-tag py-2">Basic</h3>
          <p className="p2-tag text-start py-2 pe-5">
            AI chatbot, personalized recommendations
          </p>
          <h4 className="line-h-0 text-color d-flex align-items-center">
            $ <span className="h2-tag">20</span>
          </h4>
          <button className="button-1 w-100 text-center">Get Started</button>
          <ul className="mt-3 text-color list-unstyled">
            <li className="fs-4 py-2 border-top">
              <IoIosCheckmarkCircle className="me-2" />
              Type of threat
            </li>
            <li className="fs-4 py-2 border-top">
              <IoIosCheckmarkCircle className="me-2" /> Online presence
            </li>
            <li className="fs-4 py-2 border-top">
              <IoIosCheckmarkCircle className="me-2" />
              Access to all modules
            </li>
            <li className="fs-4 py-2 border-top">
              <IoIosCheckmarkCircle className="me-2" />
              Notability
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-4 fit-height p-4 price-card">
          <h3 className="h4-tag py-2">Premium</h3>
          <p className="p2-tag text-start py-2">
            Advanced AI chatbot, priority support, analytics dashboard
          </p>
          <div>
            <h4 className="line-h-0 text-color d-flex align-items-center">
              $ <span className="h1-tag">29.99</span>
            </h4>
          </div>
          <button className="button-2 w-100">Get Started</button>
          <ul className="mt-3 text-color list-unstyled">
            <li className="fs-4 py-2 border-top">
              <IoIosCheckmarkCircle className="me-2" />
              Type of threat
            </li>
            <li className="fs-4 py-2 border-top">
              <IoIosCheckmarkCircle className="me-2" />
              Online presence
            </li>
            <li className="fs-4 py-2 border-top">
              <IoIosCheckmarkCircle className="me-2" />
              Access to all modules
            </li>
            <li className="fs-4 py-2 border-top">
              <IoIosCheckmarkCircle className="me-2" />
              Notability
            </li>
            <li className="fs-4 py-2 border-top">
              <IoIosCheckmarkCircle className="me-2" />
              Optimize existing websites
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-4 fit-height p-4 price-card">
          <h3 className="h4-tag py-2">Enterprise</h3>
          <p className="p2-tag text-start py-2 pe-5">
            AI chatbot, personalized recommendations
          </p>
          <div>
            <h4 className="line-h-0 text-color d-flex align-items-center">
              $ <span className="h2-tag">200</span>
            </h4>
          </div>
          <button className="button-1 w-100">Get Started</button>
          <ul className="mt-3 text-color list-unstyled">
            <li className="fs-4 py-2 border-top">
              <IoIosCheckmarkCircle className="me-2" />
              Type of threat
            </li>
            <li className="fs-4 py-2 border-top">
              <IoIosCheckmarkCircle className="me-2" />
              Online presence
            </li>
            <li className="fs-4 py-2 border-top">
              <IoIosCheckmarkCircle className="me-2" />
              Access to all modules
            </li>
            <li className="fs-4 py-2 border-top">
              <IoIosCheckmarkCircle className="me-2" />
              Notability
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Yearly;
