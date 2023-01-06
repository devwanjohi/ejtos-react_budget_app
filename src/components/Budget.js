import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch } = useContext(AppContext);
    const [budget, setBudget] = useState('');

    dispatch({
        type: 'Edit_Budget',
        payload: 'budget'
    })

    return (
        <div className='alert alert-secondary'>
            <label style={{ display: 'inline'}}>Budget: £
            <input
                required='required'
                type='number'
                id='budget'
                step='10'
                max='20000'
                value={budget}
                style={{ size: 10}}
                onChange={(event) => setBudget(event.target.value)}
                >
            </input>
            </label>
        </div>
    );
};

export default Budget;