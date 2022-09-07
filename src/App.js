import './App.css';
import Item from './Item';
import Product from './Product';

function App() {
  return (
    <div className="App">
        {/* Normal Props */}
      <Product name="Apple Iphone 13" description="Iphone" price={799} />
        {/* destructuring Props */}
      <Item name="Apple ipad pro" description="best Ipad" price={800} />
    </div>
  );
}

export default App;
