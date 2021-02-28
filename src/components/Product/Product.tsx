import React from 'react';
import './Product.scss';

import ProductType from '../../types/types';

interface ProductTypeWithMethods extends ProductType {
  handlePresence: (id: Date) => void,
  removeProduct: (id: Date) => void,
}

const Product = ({
  id,
  date,
  name,
  priority,
  presence,
  handlePresence,
  removeProduct
}: ProductTypeWithMethods) => {

  return (
    <div className="Product">
      <input
        className="Product__checkbox"
        type="checkbox"
        checked={presence}
        onChange={() => handlePresence(id)}
      />
      <span className="Product__name">{name} </span>
      <span className="Product__priority">{priority} </span>
      <span>{date}</span>
      <button
        className="Product__button"
        onClick={() => removeProduct(id)}
        type="button"
      >
        Remove
      </button>
    </div>
  )
}

export const MemoizedProduct = React.memo(Product);
