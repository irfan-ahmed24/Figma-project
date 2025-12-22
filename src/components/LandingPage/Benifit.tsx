import "../../styles/style.css";

function Benifit() {
  return (
    <section className="py-5 screen-width Custom-bg">
      <div className="container py-5">
        <header className="text-center mx-0 mx-md-5 px-0 px-md-5 mb-5 pb-3">
          <div className="mx-0 mx-xl-5 px-0 px-xl-5">
            <h2 className="display-6 fw-bold mx-0 mx-lg-5 h2-tag">
              Transform Your Business With AI-
              <span className="text-primary">Powered Automation</span>
            </h2>
            <p className="p2-tag mx-0 mx-lg-2">
              Quickly customize and install an AI-powered chat widget on your
              website. Engage visitors, answer questions instantly, and boost
              conversions — all without writing a single line of code.
            </p>
          </div>
        </header>
        <div className="row g-4">
          <div className="col-12">
            <div className="card1">
              <div className="row g-4 align-items-center">
                <div className="col-lg-6 p-5">
                  <span className="text-primary sub-heading">
                    ⭐ Easy Customize
                  </span>
                  <h5 className="mt-2 mb-3 text-start h3-tag me-0 me-lg-5">
                    Freely customize to match your brand
                  </h5>
                  <p className="text-color p2-tag text-start">
                    Websites that adapt to mobile viewing and fits all your
                    brand colors with your logo, typography, icons, and
                    background image.
                  </p>
                </div>
                <div className="col-lg-6 px-4 px-lg-5 pt-0 pt-lg-5">
                  <div className="bg-light image-placeholder">
                    <img
                      src="./contentImages/SummerGlasses.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid my-4">
            {" "}
            <div className="row g-4">
              {" "}
              <div className="col-12 col-lg-6">
                <div className="card2 shadow-sm h-100">
                  {" "}
                  <div className="p-4 p-md-5">
                    {" "}
                    <span className="text-primary sub-heading d-block mb-2">
                      💬 CUSTOMER SUPPORT
                    </span>
                    <h5 className="my-3 text-start h3-tag">
                      Resolve 70% of customer questions. Instantly.
                    </h5>
                    <p className="p2-tag text-start">
                      Make the chat widget a native-looking element of your
                      website. Add your company’s logo, avatar, and background
                      image.
                    </p>
                  </div>
                  <div className="px-4 px-lg-5 pb-lg-5">
                    {" "}
                    <div className="image-placeholder bg-light rounded overflow-hidden">
                      <img
                        src="./contentImages/Support.png"
                        className="w-100 img-fluid"
                        alt="Support"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="card2 shadow-sm h-100">
                  <div className="p-4 p-md-5">
                    <span className="text-primary sub-heading d-block mb-2">
                      💬 SALES SUPPORT
                    </span>
                    <h5 className="my-3 text-start h3-tag">
                      Empower Engagement and Sales
                    </h5>
                    <p className="p2-tag text-start">
                      Make the chat widget a native-looking element of your
                      website. Add your company’s logo, avatar, and background
                      image.
                    </p>
                  </div>

                  <div className="px-4 px-lg-5 pb-lg-5">
                    <div className="image-placeholder bg-light rounded overflow-hidden">
                      <img
                        src="./contentImages/saleSupport.png"
                        className="img-fluid w-100"
                        alt="Sales Support"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="card1 shadow-sm">
              <div className="row g-4 align-items-center">
                <div className="col-lg-6 p-5">
                  <span className="text-primary sub-heading">
                    ⭐ Education support
                  </span>
                  <h5 className="my-3 text-start h3-tag">
                    Freely customize to match your brand
                  </h5>
                  <p className="p2-tag text-start">
                    Websites that adapt to mobile viewing and fits all your
                    brand colors with your logo, typography, icons, and
                    background image.
                  </p>
                </div>
                <div className="col-lg-6 px-4 px-lg-5 pt-0 pt-lg-5">
                  <div className="image-placeholder bg-light">
                    <img
                      src="./contentImages/EduSupport.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benifit;
