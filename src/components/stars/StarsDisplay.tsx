import classNames from "classnames";
import { AiFillStar } from "react-icons/ai";
interface IStarsDisplayProps {
  starsNum: number;
  product?: boolean;
}


export default function StarsDisplay({ starsNum, product }: IStarsDisplayProps): React.ReactElement {
  const starsClassName = classNames(
    "flex card--stars-wrap",
    {
      "product--stars": product
    }
  )
  const data = new Array(starsNum).fill(starsNum);
  return <div className={starsClassName}>
    {data.map((star, idx) => (
      <div key={idx} className="card--star">
        <AiFillStar />
      </div>
    ))}
  </div>
}