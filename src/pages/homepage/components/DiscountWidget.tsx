import { ReactElement } from "react";
import { CiPercent } from "react-icons/ci";

export default function DiscountWidget(): ReactElement {
  return <div className="homepage--discount-widget">
    <div className="overlay overlay_1"></div>
    <div className="homepage--discount-container">
      <div className="widget--content">
        <h1>DON’T MISS THIS DISCOUNT!! </h1>
        <p>
          10
          <span>
            <CiPercent />
          </span>{' '}
          ON ALL PLIERS
        </p>
      </div>
    </div>
  </div>
}