import ReviewCard from "../Card/ReviewCard";

function Tastimonial() {
  return (
    <section className="py-5 bg-color">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="fw-bold mb-3">
              Discover The Rave Reviews From{" "}
              <span className="text-primary">Our Valued Customers!</span>
            </h2>
            <p className="text-muted">
              Quickly customize and install an AI-powered chat widget on your
              website. Engage visitors, answer questions instantly, and boost
              conversions — all without writing a single line of code.
            </p>
          </div>
        </div>

        <div className="row g-3 review">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </section>
  );
}

export default Tastimonial;
