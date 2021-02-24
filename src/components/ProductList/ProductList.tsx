import React, { useState, useEffect } from 'react';

import { Product } from '../Product/Product.tsx';

export const ProductList = () => {
  const [ products, setProducts ] = useState([]);

  const [ name, setName ] = useState('');
  const [ priority, setPriority ] = useState('1');
  const [ presence, setPresence ] = useState(false);

  useEffect(() => {
    const products = localStorage.getItem('products') || '[]';
    setProducts(JSON.parse(products));
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (event):void => {
    event.preventDefault();

    setProducts([
      ...products,
      {
        id: new Date(),
        date: new Date().toLocaleTimeString(),
        name,
        priority,
        presence: presence,
      }
    ]);

    setName('');
    setPriority('1');
    setPresence(false);
  }

  const handlePresence = (id:number):void => {
    setProducts(products.map(product => {
      if (product.id === id) {
        product.presence = !product.presence;
      }

      return product;
    }));
  }

  const removeProduct = (id:number):void => {
    setProducts(products.filter(product => {
      return product.id !== id;
    }));
  }

  return (
    <div>
      <form action="" onSubmit={addProduct}>
        <input
          name="presence"
          type="checkbox"
          checked={presence}
          onChange={() => setPresence(!presence)}
        />

        <input
          name="name"
          type="text"
          required
          placeholder="Product name"
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <input
          name="priority"
          type="number"
          required
          placeholder="Priority"
          value={priority}
          min="1"
          max="5"
          onChange={event => setPriority(event.target.value)}
        />

        <button>Add product</button>
      </form>

      <ul className="ProductList">
        {products.length > 0
          && products.map(product => (
            <li key={product.date}>
              <Product
                {...product}
                handlePresence={handlePresence}
                removeProduct={removeProduct}
              />
            </li>
          ))
        }
      </ul>
    </div>
  )
}
