import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ charge, handleCharge, amount, handleAmount, handleSubmit, edit }) => {
  return (
    <form>
      <div className='form-center'>
        <div className='form-group'>
          <label htmlFor='expense'>지출 항목</label>
          <input
            type='text'
            className='form-control'
            id='charge'
            name='charge'
            placeholder='예) 렌트비'
            onChange={handleCharge}
            value={charge}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>비용</label>
          <input
            type='number'
            className='form-control'
            id='amount'
            name='amount'
            placeholder='예) 100'
            onChange={handleAmount}
            value={amount}
          />
        </div>
      </div>
      <button type='submit' className='btn' onClick={handleSubmit}>
        {edit ? '수정' : '제출'}
      </button>
    </form>
  );
};

export default ExpenseForm;
