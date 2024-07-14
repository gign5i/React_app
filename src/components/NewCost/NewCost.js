import NewCostForm from "./NewCostForm";
import React, {useState} from "react";
import './NewCost.css';
function NewCost(props) {
  const [content, setContent] = useState(true);
  const SaveCostDataHandler = (info) => {
    const costData = {
      ...info,
      id: 'c' + Math.random(100).toString(),
    }
    props.onAddNewCost(costData);
    setContent(true);
  };

  const FormRenderHendler = (event) => {
    event.preventDefault();
    setContent(false);
  };

  const CancleFormHandler = () => {
    setContent(true);
}
  

  return (
    <div className="new-cost">
      {content ? <button type="submit" onClick={FormRenderHendler}> Добавить новый расход </button> : <NewCostForm onSaveCostData={SaveCostDataHandler} onCancle={CancleFormHandler}/> }
    </div>
  );
};

export default NewCost;