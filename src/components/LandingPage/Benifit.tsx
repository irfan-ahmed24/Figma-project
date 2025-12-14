import "../../styles/Benifit.css";
import "../../styles/style.css";

function Benifit() {
  return (
    <section className="py-5 screen-width custom-bg-light">
        <div className="container py-5">
            <header className="text-center mb-5 pb-3">
                <h1 className="display-6 fw-bold text-dark">
                    Transform Your Business With <span className="text-primary">AI-Powered Automation</span>
                </h1>
                <p className="text-muted w-75 mx-auto">
                    A catchy subtitle goes here to further explain the value proposition and target audience...
                </p>
            </header>
            <div className="row g-4"> 
                <div className="col-12">
                    <div className="card shadow-sm large-feature-card">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-6 p-5">
                                <span className="text-primary fw-bold small">⭐ APP FOOTER</span>
                                <h2 className="h3 fw-bold mt-2 mb-3">Freely customize to match your brand</h2>
                                <p className="text-muted">Websites that adapt to mobile viewing and fits all your brand colors with your logo, typography, icons, and background image.</p>
                            </div>
                            <div className="col-lg-6 px-5 pt-5">
                                <div className="image-placeholder bg-light rounded border">
                                    <img src="./contentImages/SummerGlasses.png" className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-between align-items-center position-relative my-4">
                    <div className="connector-line d-none d-lg-block"></div> 
                    <div className="row g-4"> 
                        <div className="col-lg-6">
                            <div className="card h-100 shadow-sm small-feature-card">
                                <div className="col-12 p-5">
                                    <span className="text-primary fw-bold small">💬 CUSTOMER SUPPORT</span>
                                    <h2 className="h4 fw-bold mt-2 mb-3">Resolve 70% of customer questions. **Instantly.**</h2>
                                    <p className="text-muted">Resolve live chat queues, and start auto-resolving issues.</p>
                                </div>
                                <div className="col-12 px-5 pt-5">
                                    <div className="image-placeholder bg-light rounded border">
                                        <img src="./contentImages/Support.png" className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card h-100 shadow-sm small-feature-card">
                                <div className="col-12 p-5">
                                    <span className="text-primary fw-bold small">💬 Sales support</span>
                                    <h2 className="h4 fw-bold mt-2 mb-3">Empower Engagement and Sales</h2>
                                    <p className="text-muted">Make the chat widget a native-looking element of your website. Add your company’s logo, avatar, and background image.</p>
                                </div>
                                <div className="col-12 px-5 pt-5">
                                    <div className="image-placeholder bg-light rounded border">
                                        <img src="./contentImages/saleSupport.png" className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="card shadow-sm large-feature-card">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-6 p-5">
                                <span className="text-primary fw-bold small">⭐ Education support</span>
                                <h2 className="h3 fw-bold mt-2 mb-3">Freely customize to match your brand</h2>
                                <p className="text-muted">Websites that adapt to mobile viewing and fits all your brand colors with your logo, typography, icons, and background image.</p>
                            </div>
                            <div className="col-lg-6 px-5 pt-5">
                                <div className="image-placeholder bg-light rounded border">
                                    <img src="./contentImages/EduSupport.png" className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Benifit
