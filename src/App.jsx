import React from 'react'
import Addtodo from './components/addtodo'
import Items from './components/items'
const App = () => {
  const foodItems = [
    {
      taskname: "go to college",
      duedate: "4/Jan/55",
    },
    {
      taskname: "eat Lunch",
      duedate: "4/Jan/55",
    },
  ]
  return (
    <div>
      <Addtodo></Addtodo>
      <Items items={foodItems}></Items>
    </div>
  )
}

export default App