import React from 'react'
import Container from './components/container'
import Fooditems from './components/fooditems'
import Input from './components/input'
const App = () => {
  const items = ['dal', 'roti', 'chawal', 'sb bdiya']
  const HandleOnChange = (event) => {
    console.log(event.target.value);
  }
  return (
    <div>
      <Input HandleOnChange={HandleOnChange}></Input>
      <Fooditems items={items} ></Fooditems>
    </div >
  )
}

export default App