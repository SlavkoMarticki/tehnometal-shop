import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components";
import "./styles/findUsSection.css";
import { IoIosArrowForward } from "react-icons/io"
export default function FindUsSection(): ReactElement {

  return <div className="find--us-container">
    <div className="find--us-wrap">
      <div className="overlay overlay_1"></div>
      <h1 className="find--us-title">Lets find something for your needs!!</h1>
      <Link to="/categories">
        <Button className="btn find--us-btn">
          Go to our categories
          <IoIosArrowForward />
        </Button>
      </Link>
    </div>
  </div>
}