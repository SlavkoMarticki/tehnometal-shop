import { useState } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  hoverIcon: any;
  regularIcon: any;
  path?: string;
  onClick?: () => void;
}

export default function HoverableIcon(props: IProps): React.ReactElement {
  const [isIconOnHoverMode, setIsIconOnHoverMode] = useState<boolean>(false);

  const { hoverIcon, regularIcon, path, onClick } = props;
  return (
    <span
      onMouseOver={() => {
        setIsIconOnHoverMode(true);
      }}
      onMouseLeave={() => {
        setIsIconOnHoverMode(false);
      }}
      onClick={onClick}
    >
      {path != null ? (
        <Link to={path}>{isIconOnHoverMode ? hoverIcon : regularIcon}</Link>
      ) : (
        <>{isIconOnHoverMode ? hoverIcon : regularIcon}</>
      )}
    </span>
  );
}
