import './App.scss';
import './styles/reset.scss';

// import { Filter } from './components/Filter/Filter.jsx';
import { ProductList } from './components/ProductList/ProductList.jsx';

const App:React.FC = () => {

  return (
    <div className="App">
      {/* <Filter /> */}
      <ProductList />
    </div>
  );
}

export default App;
