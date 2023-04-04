import { useState } from 'react';

interface IProps {
  hoverIcon: any;
  regularIcon: any;
}

export default function HoverableIcon(
  props: IProps
): React.ReactElement {
  const [
    isIconOnHoverMode,
    setIsIconOnHoverMode
  ] = useState<boolean>(false);

  const { hoverIcon, regularIcon } = props;
  return (
    <span
      onMouseOver={() => {
        setIsIconOnHoverMode(true);
      }}
      onMouseLeave={() => {
        setIsIconOnHoverMode(false);
      }}
    >
      {isIconOnHoverMode
        ? hoverIcon
        : regularIcon}
    </span>
  );
}
