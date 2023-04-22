import { observer } from 'mobx-react';
import useStore from '../../../hooks/useStore';

export default observer(
  function NavCartItemsDisplay(): React.ReactElement | null {
    const {
      cartStore: { totalCount }
    } = useStore();
    if (totalCount > 0) {
      return (
        <span className='cart-count'>
          <p>{totalCount}</p>
        </span>
      );
    }

    return null;
  }
);
