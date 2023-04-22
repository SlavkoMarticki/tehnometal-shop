import { observer } from 'mobx-react';
import { useAuthUser } from '../../../hooks';
import { HoverableIcon } from '../../hoverable-icon';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import useStore from '../../../hooks/useStore';

interface IFavIconProps {
  isFavorite: boolean;
  subCatId: string;
  prodId: string;
  className?: string;
  callback?: () => void;
}

export default observer((props: IFavIconProps): React.ReactElement | null => {
  const { isFavorite, subCatId, prodId, className, callback } = props;
  const { user } = useAuthUser();

  const {
    productStore: { toggleFavoriteState }
  } = useStore();

  if (user == null) {
    return null;
  }

  if (isFavorite) {
    return (
      <HoverableIcon
        onClick={() => {
          toggleFavoriteState(subCatId, prodId, !isFavorite);
          /* eslint-disable-next-line */
          if (callback) {
            callback();
          }
        }}
        regularIcon={
          <AiFillHeart
            style={{ color: '#ff4a4a' }}
            className={className}
          />
        }
        hoverIcon={
          <AiOutlineHeart
            style={{ color: '#ff4a4a' }}
            className={className}
          />
        }
      />
    );
  }

  return (
    <HoverableIcon
      onClick={() => {
        toggleFavoriteState(subCatId, prodId, !isFavorite);
      }}
      regularIcon={<AiOutlineHeart className={className} />}
      hoverIcon={<AiFillHeart className={className} />}
    />
  );
});
