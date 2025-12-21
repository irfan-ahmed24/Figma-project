import ReviewCard from "../Card/ReviewCard";

function Tastimonial() {
  return (
    <section className="py-5 bg-color">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="fw-bold mb-3 h2-tag">
              Discover The Rave Reviews From Our
              <span className="text-primary"> Valued Customers!</span>
            </h2>
            <p className="p2-tag">
              Quickly customize and install an AI-powered chat widget on your
              website. Engage visitors, answer questions instantly, and boost
              conversions — all without writing a single line of code.
            </p>
          </div>
        </div>

        <div className="row d-flex review">
            <div className="col-12 col-lg-4">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
            <div className="col-12 col-lg-4 offset-up">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
            <div className="col-12 col-lg-4">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
        </div>
      </div>
    </section>
  );
}

export default Tastimonial;
