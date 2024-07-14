import './CostsList.css';
import CostItem from './CostItem';

const ConstList = (props) => {


  if (props.costs.length === 0) {
    return (
      <h2 className='cost-list__fallback'>Никаких затрат не было в этом году!</h2>
    )
  };

  return (
    <ul className='cost-list'>
      {props.costs.map((cost) => {
      return (<CostItem 
        key = {cost.id}
        date = {cost.date} 
        description = {cost.description} 
        amount = {cost.amount} 
      />
      );
    })}
    </ul>

  );
};

export default ConstList;