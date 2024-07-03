import React, { useState } from 'react'
import Container from './components/container'
import Fooditems from './components/fooditems'
import Input from './components/input'
const App = () => {
  const [texttoshow, settext] = useState('Enter your text here!');
  const [items, setitems] = useState(['dal', 'roti', 'chawal', 'sb bdiya'])
  const HandleOnChange = (event) => {
    if (event.key == "Enter") {
      let newitem = event.target.value;
      let newitems = [...items, newitem];
      setitems(newitems);
    }
  }
  return (
    <div>
      <Input HandleOnChange={HandleOnChange}></Input>
      <h1>
        {
          texttoshow
        }
      </h1>
      <Fooditems items={items}></Fooditems>
    </div >
  )
}

export default App