import * as React from 'react';
import { Pagination } from '@material-ui/lab';

interface IPagerProps {
  count?: number;
  page?: number;
  handleChange: (event: any, value: number) => void;
}

export default function Pager(props: IPagerProps): React.ReactElement {
  const { count, page, handleChange } = props;
  return (
    <Pagination
      page={page}
      count={count}
      onChange={handleChange}
      variant='outlined'
      shape='rounded'
      className='pager'
    />
  );
}
