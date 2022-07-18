import { memo } from 'react';

const UnComponent = ({ items }) => {
  console.log('render unComponent');

  return <p>{items.length}</p>;
};

export default memo(UnComponent);
