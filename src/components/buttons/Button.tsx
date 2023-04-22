import React from 'react';
import { IButtonTypes } from '../../types';
import './button.css';

export default function Button(props: IButtonTypes): React.ReactElement {
  const { type = 'button', className, children, onClick } = props;

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
