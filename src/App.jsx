import React from 'react'
import FoodItems from './components/foodItems';
const App = () => {
  let items = ['dal', 'piyush', 'chawal', 'hindi'];
  // let items = []
  if (items.length == 0) {
    return <h1>
      Empty every
    </h1>
  }
  return (
    <div>
      <FoodItems lovefood={items}></FoodItems>
    </div>
  )
}

export default App