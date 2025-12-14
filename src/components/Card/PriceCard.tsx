function PriceCard() {
  return (
    <>
    <div className="col-12 col-md-4 fit-height p-4 border rounded-3 price-card">
        <h3>Basic</h3>
        <p>AI chatbot, personalized recommendations</p>
            <h4 className="line-h-0">$ 0</h4>
            <button className="button-1 w-100">Get Started</button>
        <ul className="mt-3">
            <li className="fs-4 py-2 border-top">Type of threat</li>
            <li className="fs-4 py-2 border-top">Online presence</li>
            <li className="fs-4 py-2 border-top">Access to all modules</li>
            <li className="fs-4 py-2 border-top">Notability</li>
        </ul>
    </div>

    <div className="col-12 col-md-4 fit-height p-4 border rounded-3 price-card">
        <h3>Premium</h3>
        <p>Advanced AI chatbot, priority support, analytics dashboard</p>
        <div>
            <h4>$ 99.99</h4>
        </div>
        <button className="button-1 w-100 bg-primary text-white">Get Started</button>
        <ul className="mt-3">
            <li className="fs-4 py-2 border-top">Type of threat</li>
            <li className="fs-4 py-2 border-top">Online presence</li>
            <li className="fs-4 py-2 border-top">Access to all modules</li>
            <li className="fs-4 py-2 border-top">Notability</li>
            <li className="fs-4 py-2 border-top">Optimize existing websites</li>
        </ul>
    </div>

    <div className="col-12 col-md-4 fit-height p-4 border rounded-3 price-card">
        <h3>Enterprise</h3>
        <p>AI chatbot, personalized recommendations</p>
        <div>
            <h4>$ 20.99</h4>
        </div>
        <button className="button-1 w-100">Get Started</button>
        <ul className="mt-3">
            <li className="fs-4 py-2 border-top">Type of threat</li>
            <li className="fs-4 py-2 border-top">Online presence</li>
            <li className="fs-4 py-2 border-top">Access to all modules</li>
            <li className="fs-4 py-2 border-top">Notability</li>
        </ul>
    </div>
    </>
  );
}

export default PriceCard;
