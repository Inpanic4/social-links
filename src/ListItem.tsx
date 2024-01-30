import React from 'react';

type ListItemProps = {
  name: string;
};

const ListItem: React.FC<ListItemProps> = ({ name }) => {
  return <li className='py-3 my-4 bg-neutral-grey rounded-lg'>{name}</li>;
};

export default ListItem;
