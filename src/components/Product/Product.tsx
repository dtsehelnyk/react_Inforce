import React from 'react';
import './Product.scss';

type ProductType = {
    id: number;
    date: number,
    name: string;
    priority: string,
    presence: boolean,
  }

export const Product = ({
    id,
    date,
    name,
    priority,
    presence,

    handlePresence,
    removeProduct
  }: ProductType) => {

  return (
    <div className="Product">
      <input
        type="checkbox"
        checked={presence}
        onChange={() => handlePresence(id)}
      />
      <span className="Product__name">{name} </span>
      <span className="Product__priority">{priority} </span>
      <span>{date}</span>
      <button
        onClick={() => removeProduct(id)}
        type="button"
      >
        Remove
      </button>
    </div>
  )
}
