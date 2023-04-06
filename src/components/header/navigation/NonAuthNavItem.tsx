import { useAuthUser } from '../../../hooks';

interface INonAuthNavItem {
  children: JSX.Element;
}

export default function NonAuthNavItem(
  props: INonAuthNavItem
): JSX.Element | null {
  const { user } = useAuthUser();
  const { children } = props;
  if (user == null) {
    return children;
  } else {
    return null;
  }
}
