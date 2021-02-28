// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { getStorageData, setStorageData } from '../../helpers/localStorage';

// import { sortProducts } from '../../store/sortingReducer';

// export const Filter = () => {
//   // const sorting = useSelector(state => state.sortingReducer.sortingReducer);
//   const dispatch = useDispatch();

//   const [ sorting, setSorting ] = useState('');

//   // const [ products, setProducts ] = useState([]);
//   const [ products, setProducts ] = useState(getStorageData('products'));
  

//   useEffect(() => {
//     switch (sorting) {
//       case 'BY_NAME':
//         setProducts(products.sort((productA, productB) => productA.name.localeCompare(productB.name)));
//         break;

//       case 'BY_PRIORITY':
//         setProducts(products.sort((productA, productB) => productA.priority - productB.priority));
//         break;

//       case 'BY_PRESENCE':
//         setProducts(products.sort((productA, productB) => productA.presence - productB.presence));
//         break;

//       default:
//         break;
//     }
//   }, [sorting])

//   useEffect(() => {
//     setProducts(setStorageData('products'))
//   }, [sorting])

//   return (
//     <form action="">
//       <select
//         name=""
//         id=""
//         value={sorting}
//         onChange={(event) => {
//           setSorting(event.target.value);
//         }}
//       >
//         <option value="BY_NAME">By name</option>
//         <option value="BY_PRESENCE">By presence</option>
//         <option value="BY_PRIORITY">By priority</option>
//       </select>
//     </form>
//   );
// }