import React, {useState,useEffect} from 'react';
import './App.css';
import Item from './Item';

import Product from './Product';

function App() {

const [count ,setCount] = useState(0);
const [windowWidth,setwindowWidth] = useState(window.innerWidth);
const [name,setName] = useState("");

{/* on Every Render*/}
useEffect(() => {
  console.log("Re-rendered");
})
  
{/*componentDidMount alternative renderes only one time when the Component mounts */}
useEffect(() => {
console.log("Mounted");
},[])

{/*componentDidUpdate alternative renderes on start when the dependency array changes*/}
useEffect(()=>{
  console.log(`the name is changed: ${name}`)
},[name])

const increment=() => {
  setCount(count + 1)
}
const decrement=() => {
  setCount(count -1);
}
  return (
    <div className="App">

    

        {/* State Example*/} 
      <h1>A Counter App</h1>
      <p>The Count is : {count}</p>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Less</button>
      <br/>
      <br/>

      {/* useEffect Example*/} 
      <div>
      <input 
      value={name} 
      onChange= {(e) => setName(e.target.value)}
      placeholder="enter value" 
      />
      </div>


        {/* Normal Props */}
      <Product name="Apple Iphone 13" description="Iphone" price={799} />
        {/* destructuring Props */}
      <Item name="Apple ipad pro" description="best Ipad" price={800} />
    </div>
  );
}

export default App;
