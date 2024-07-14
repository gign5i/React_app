
import Card from "../UI/Card";
import './Costs.css'
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import ConstList from "./CostsList";

function Costs (props) {
  const [defYear, setYear] = useState('2021');
  const changeYearHandler = (info) => {
    setYear(info)
  };

  console.log(props.costs);

  const filteredCosts = props.costs.filter((el) => el.date.getFullYear().toString() === defYear);

  

  return (
    <div className="div-1">
      <Card className="costs">
        <CostsFilter year = {defYear} onChangeYear={changeYearHandler} />
        <ConstList costs={filteredCosts}/>
      </Card>
    </div>
  );
};

export default Costs;