import React, { useState } from 'react';
import './NewCostForm.css';

function NewCostForm(props) {
    const [name, setName] = useState('');
    const [sum, setSum] = useState('');
    const [date, setDate] = useState('');
    // const [userInput, setInput] = useState({
    //     name: '',
    //     sum: '',
    //     date: '',
    // });
    const nameChangeHandler = (event) => {
        setName(event.target.value);
        // useState({
        //     ...userInput,
        //     name: event.target.value
        // });
        // useState((prevState) => {
        //     return {
        //         ...prevState,
        //         name: event.target.value
        //     }
        // })
    };

    const sumChangeHandler = (event) => {
        setSum(event.target.value);
        // useState({
        //     ...userInput,
        //     sum: event.target.value
        // });
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
        // useState({
        //     ...userInput,
        //     date: event.target.value
        // });
    };

    const formSubmitedHandler = (event) => {
        event.preventDefault();

        const newData = {
            description: name,
            amount: sum,
            date: new Date(date)
        };
        props.onSaveCostData(newData);
        setName('');
        setDate('');
        setSum('');
        // console.log(newData);
        
    }

    return (
        <form onSubmit={formSubmitedHandler}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label> Название </label>
                    <input type="text" value={name} onChange={nameChangeHandler}/>
                </div>
                <div className='new-cost__control'>
                    <label> Сумма </label>
                    <input type="number" value={sum} onChange={sumChangeHandler}/>
                </div>
                <div className='new-cost__control'>
                    <label> Дата </label>
                    <input type="date" value={date} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-const__actions'>
                <button type='submit'>Добавить расход</button>
                <button type='submit' onClick={props.onCancle}>Отмена</button>
            </div>
        </form>
    );
};

export default NewCostForm;