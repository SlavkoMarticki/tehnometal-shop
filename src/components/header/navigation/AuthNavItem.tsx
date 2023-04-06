import { useAuthUser } from '../../../hooks';

interface IAuthNavItem {
  children: JSX.Element;
}

export default function AuthNavItem(props: IAuthNavItem): JSX.Element | null {
  const { user } = useAuthUser();
  const { children } = props;
  if (user != null) {
    return children;
  } else {
    return null;
  }
}
