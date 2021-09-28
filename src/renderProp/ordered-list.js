import React from 'react';

const OrderedList = ({ items }) => {
  return (
    <ol>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  );
};

export default OrderedList;
