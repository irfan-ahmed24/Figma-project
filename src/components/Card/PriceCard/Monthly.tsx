function Monthly(props: { onMonthly: boolean }) {
  const { onMonthly } = props;
  return (
    <>
      <div
        className={`d-flex flex-column flex-md-row gap-4 align-items-center justify-content-center ${
          onMonthly ? "" : "d-none"
        }`}
      >
        <div className={`col-12 col-md-4 fit-height p-4 shadow price-card`}>
          <h3 className="h4-tag">Basic</h3>
          <p className="p2-tag text-start">AI chatbot, personalized recommendations</p>
          <h4 className="line-h-0 text-color">$ 0</h4>
          <button className="button-1 w-100">Get Started</button>
          <ul className="mt-3 text-color">
            <li className="fs-4 py-2 border-top">Type of threat</li>
            <li className="fs-4 py-2 border-top">Online presence</li>
            <li className="fs-4 py-2 border-top">Access to all modules</li>
            <li className="fs-4 py-2 border-top">Notability</li>
          </ul>
        </div>

        <div className="col-12 col-md-4 fit-height p-4 shadow price-card">
          <h3 className="h4-tag">Premium</h3>
          <p className="p2-tag text-start">Advanced AI chatbot, priority support, analytics dashboard</p>
          <div>
            <h4 className="text-color">$ 99.99</h4>
          </div>
          <button className="button-2 w-100">Get Started</button>
          <ul className="mt-3 text-color">
            <li className="fs-4 py-2 border-top">Type of threat</li>
            <li className="fs-4 py-2 border-top">Online presence</li>
            <li className="fs-4 py-2 border-top">Access to all modules</li>
            <li className="fs-4 py-2 border-top">Notability</li>
            <li className="fs-4 py-2 border-top">Optimize existing websites</li>
          </ul>
        </div>

        <div className="col-12 col-md-4 fit-height p-4 shadow price-card">
          <h3 className="h4-tag">Enterprise</h3>
          <p className="p2-tag text-start">AI chatbot, personalized recommendations</p>
          <div>
            <h4 className="text-color">$ 20.99</h4>
          </div>
          <button className="button-1 w-100">Get Started</button>
          <ul className="mt-3 text-color">
            <li className="fs-4 py-2 border-top">Type of threat</li>
            <li className="fs-4 py-2 border-top">Online presence</li>
            <li className="fs-4 py-2 border-top">Access to all modules</li>
            <li className="fs-4 py-2 border-top">Notability</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Monthly;
