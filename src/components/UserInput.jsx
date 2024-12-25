import React, { useState } from 'react';

const UserInput = ({ userInputState, onChange }) => {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label> Initial Investment</label>
          <input
            type='number'
            required
            value={userInputState.intitialInvestment}
            onChange={(e) => onChange('initialInvestment', e.target.value)}
          />
        </p>
        <p>
          <label> Annual Investment</label>
          <input
            type='number'
            required
            value={userInputState.annualInvestment}
            onChange={(e) => onChange('annualInvestment', e.target.value)}
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
            onChange={(e) => onChange('expectedReturn', e.target.value)}
          />
        </p>
        <p>
          <label> Duration</label>
          <input
            type='number'
            required
            value={userInputState.duration}
            onChange={(e) => onChange('duration', e.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
