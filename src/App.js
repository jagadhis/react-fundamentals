import React, {useState} from 'react';
import './App.css';
import Item from './Item';

import Product from './Product';

function App() {

const [count ,setCount] = useState(0);

const increment=() => {
  setCount(count + 1)
}
const decrement=() => {
  setCount(count -1);
}
  return (
    <div className="App">

      <h1>A Counter App</h1>
      <p>The Count is : {count}</p>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Less</button>
        {/* Normal Props */}
      <Product name="Apple Iphone 13" description="Iphone" price={799} />
        {/* destructuring Props */}
      <Item name="Apple ipad pro" description="best Ipad" price={800} />
    </div>
  );
}

export default App;
