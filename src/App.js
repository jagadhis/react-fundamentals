import './App.css';
import Item from './Item';
import Product from './Product';

function App() {
let count=0;

const increment=() => {
  count += 1;
}
const decrement=() => {
  count -= 1;
}
  return (
    <div className="App">

      <h1>A Counter App</h1>
      <p>The Count is : {count}</p>
      <button>Add</button>
      <button>Less</button>
        {/* Normal Props */}
      <Product name="Apple Iphone 13" description="Iphone" price={799} />
        {/* destructuring Props */}
      <Item name="Apple ipad pro" description="best Ipad" price={800} />
    </div>
  );
}

export default App;
