import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductList.scss';
import ProductType from '../../types/types';

import { sortProducts } from '../../store/sortingReducer';
import { getStorageData, setStorageData } from '../../helpers/localStorage';

import { MemoizedProduct } from '../Product/Product';

// export const ProductList:React.FC = () => {
export const ProductList = () => {
  const dispatch = useDispatch();
  // const productsFromStore = useSelector(state => state.sortingReducer.products);

  // const [ products, setProducts ] = useState<Array<ProductType>>([]);
  // const [ products, setProducts ] = useState(getStorageData('products'));
  const [ products, setProducts ] = useState([]);


  const [ name, setName ] = useState('');
  const [ priority, setPriority ] = useState('1');
  const [ presence, setPresence ] = useState(false);

  useEffect(() => {
    setStorageData('products', products);
  }, [products]);

  // useEffect(() => {
  //   dispatch(sortProducts(products));
  // }, [products]);

  // const addProduct = (event: React.FormEvent<HTMLFormElement>): void => {
  const addProduct = (event) => {
    event.preventDefault();

    setProducts([
      ...products,
      {
        id: new Date(),
        date: new Date().toLocaleTimeString(),
        name: name,
        presence,
        priority,
      }
    ]);

    setName('');
    setPriority('1');
    setPresence(false);

    setStorageData('products', products);
  }

  // const handlePresence = (id: Date): void => {
  const handlePresence = (id) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        product.presence = !product.presence;
      }

      return product;
    }));
  }

  // const removeProduct = (id: Date): void => {
  const removeProduct = (id) => {
    setProducts(products.filter(product => {
      return product.id !== id;
    }));
  }

  return (
    <div className="ProductList">
      <form
        action=""
        className="ProductList__form"
        onSubmit={addProduct}
      >
        <input
          className="ProductList__checkbox"
          name="presence"
          type="checkbox"
          checked={presence}
          onChange={() => setPresence(!presence)}
        />

        <input
          className="ProductList__input"
          name="name"
          type="text"
          required
          placeholder="Product name"
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <input
          className="ProductList__input"
          name="priority"
          type="number"
          required
          placeholder="Priority"
          value={priority}
          min="1"
          max="5"
          onChange={event => setPriority(event.target.value)}
        />

        <button className="ProductList__button">
          Add product
        </button>
      </form>

      <ul className="ProductList__list">
        {products.length > 0
          && products.map(product => (
            <li key={product.date}>
              <MemoizedProduct
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
