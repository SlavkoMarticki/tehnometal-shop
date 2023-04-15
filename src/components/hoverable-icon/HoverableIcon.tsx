import { useState } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  hoverIcon: any;
  regularIcon: any;
  path?: string;
  onClick?: () => void;
  spanClassName?: string;
}

export default function HoverableIcon(props: IProps): React.ReactElement {
  const [isIconOnHoverMode, setIsIconOnHoverMode] = useState<boolean>(false);

  const { hoverIcon, regularIcon, path, onClick, spanClassName } = props;
  return (
    <span
      onMouseOver={() => {
        setIsIconOnHoverMode(true);
      }}
      onMouseLeave={() => {
        setIsIconOnHoverMode(false);
      }}
      onClick={onClick}
      className={spanClassName}
    >
      {path != null ? (
        <Link to={path}>{isIconOnHoverMode ? hoverIcon : regularIcon}</Link>
      ) : (
        <>{isIconOnHoverMode ? hoverIcon : regularIcon}</>
      )}
    </span>
  );
}
