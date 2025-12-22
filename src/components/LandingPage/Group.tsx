//import css file
import "../../styles/style.css";
import { TfiWorld } from "react-icons/tfi";
import { FaWebflow } from "react-icons/fa6";
import { FaWordpress } from "react-icons/fa";
import { FaWix } from "react-icons/fa";
import { FaWeebly } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { SiBigcommerce } from "react-icons/si";
import { FaSquarespace } from "react-icons/fa";

function Group() {
  return (
    <div className="screen-width py-5 bg-color">
      <div className="row g-4 container mx-auto">
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div className="p-4 d-flex h-100 align-items-center group-border">
            <div className="d-flex align-items-center">
              <TfiWorld className="me-3 group-icon display-6" />
            </div>
            <div>
              <p className="text-start p2-tag">Install on</p>
              <a href="#" className="h6-tag text-primary website-link">
                Your Website{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div className="p-4 d-flex h-100 align-items-center group-border">
            <div className="d-flex align-items-center">
              <FaWebflow className="me-3 group-icon display-6" />
            </div>
            <div>
              <p className="text-start p2-tag">Install on</p>
              <a href="#" className="h6-tag text-primary website-link">
                Your Website{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div className="p-4 d-flex h-100 align-items-center group-border">
            <div className="d-flex align-items-center">
              <FaWordpress className="me-3 group-icon display-6" />
            </div>
            <div>
              <p className="text-start p2-tag">Install on</p>
              <a href="#" className="h6-tag text-primary website-link">
                Your Website{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div className="p-4 d-flex h-100 align-items-center group-border">
            <div className="d-flex align-items-center">
              <FaWix className="me-3 group-icon display-6" />
            </div>
            <div>
              <p className="text-start p2-tag">Install on</p>
              <a href="#" className="h6-tag text-primary website-link">
                Your Website{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div className="p-4 d-flex h-100 align-items-center group-border">
            <div className="d-flex align-items-center">
              <FaWeebly className="me-3 group-icon display-6" />
            </div>
            <div>
              <p className="text-start p2-tag">Install on</p>
              <a href="#" className="h6-tag text-primary website-link">
                Your Website{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div className="p-4 d-flex h-100 align-items-center group-border">
            <div className="d-flex align-items-center">
              <FaShopify className="me-3 group-icon display-6" />
            </div>
            <div>
              <p className="text-start p2-tag">Install on</p>
              <a href="#" className="h6-tag text-primary website-link">
                Your Website{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div className="p-4 d-flex h-100 align-items-center group-border">
            <div className="d-flex align-items-center">
              <SiBigcommerce className="me-3 group-icon display-6" />
            </div>
            <div>
              <p className="text-start p2-tag">Install on</p>
              <a href="#" className="h6-tag text-primary website-link">
                Your Website{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div className="p-4 d-flex h-100 align-items-center group-border">
            <div className="d-flex align-items-center">
              <FaSquarespace className="me-3 group-icon display-6" />
            </div>
            <div>
              <p className="text-start p2-tag">Install on</p>
              <a href="#" className="h6-tag text-primary website-link">
                Your Website{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;
