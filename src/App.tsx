import './App.scss';
import './styles/reset.scss';

import { ProductList } from './components/ProductList/ProductList';

const App:React.FC = () => {

  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;
