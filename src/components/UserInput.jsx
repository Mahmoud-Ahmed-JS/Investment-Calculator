import React, { useState } from 'react';

const UserInput = ({ userInputState, onChangeValue }) => {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label> Initial Investment</label>
          <input
            type='number'
            required
            value={userInputState.intitialInvestment}
            onChange={(e) =>
              onChangeValue('intitialInvestment', e.target.value)
            }
          />
        </p>
        <p>
          <label> Annual Investment</label>
          <input
            type='number'
            required
            value={userInputState.annualInvestment}
            onChange={(e) => onChangeValue('annualInvestment', e.target.value)}
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label> Expected Return</label>
          <input
            type='number'
            required
            value={userInputState.expectedReturn}
            onChange={(e) => onChangeValue('expectedReturn', e.target.value)}
          />
        </p>
        <p>
          <label> Duration</label>
          <input
            type='number'
            required
            value={userInputState.duration}
            onChange={(e) => onChangeValue('duration', e.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
