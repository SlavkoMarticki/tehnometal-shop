import { useState } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  hoverIcon: any;
  regularIcon: any;
  path?: string;
}

export default function HoverableIcon(props: IProps): React.ReactElement {
  const [isIconOnHoverMode, setIsIconOnHoverMode] = useState<boolean>(false);

  const { hoverIcon, regularIcon, path } = props;
  return (
    <span
      onMouseOver={() => {
        setIsIconOnHoverMode(true);
      }}
      onMouseLeave={() => {
        setIsIconOnHoverMode(false);
      }}
    >
      {path != null ? (
        <Link to={path}>{isIconOnHoverMode ? hoverIcon : regularIcon}</Link>
      ) : (
        <>{isIconOnHoverMode ? hoverIcon : regularIcon}</>
      )}
    </span>
  );
}
