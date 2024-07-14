import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2019, 2, 12),
    description: 'Fridge',
    amount: 10.2
  },
  {
    id: 'c2',
    date: new Date(2021, 2, 12),
    description: 'PC',
    amount: 100.2
  },
  {
    id: 'c3',
    date: new Date(2021, 2, 12),
    description: 'Desktop',
    amount: 1000.2
  }
];

function App() {

  const [costs, setCost] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCost((prevCosts) => ([cost, ...prevCosts]));
  }
  return (
   <div>
    <h1>Hello world</h1>
    <NewCost onAddNewCost={addCostHandler}/>
    <Costs costs = {costs} />
   </div>
  );
}

export default App;
