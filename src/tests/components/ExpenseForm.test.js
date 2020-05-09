import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';

test ('should render Expense form correctly', ()=> {
    const wrapper = shallow (<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
});

import expenses from '../fixtures/expenses';

test  ('shoulk rende Expense form correctly with expense data', ()=>{
    const wrapper = shallow(<ExpenseForm expense = {expenses[1]} />);
    expect(wrapper).toMatchSnapshot()
});
 
test('should render error for invalid form dsubmission', ()=>{
    const wrapper =shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{
        preventDefault : ()=> { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should se tdesctipiyon on input change',()=>{
    const value = 'New Description ';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    });
    expect(wrapper.state('description')).toBe(value);
});

test('shuld set note on textarea change',()=>{

    const value = 'New Note ';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('textarea').simulate('change',{
        target:{value}
    });
    expect(wrapper.state('note')).toBe(value);

});

test('should se amount  change',()=>{
    const value = '12.22';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should se amount  change',()=>{
    const value = '12.22 isinvalid input for amount';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    });
    expect(wrapper.state('amount')).toBe('');
});

test('shoul call onSubmit  props for valid form',()=> {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find("form").simulate('submit',{
        preventDefault:()=>{ }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt:expenses[0].createdAt
    });
});
test('should set new Date on Date change', ()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt'));
})

test('should set calender focus on change', ()=>{
    const focused = true;
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
})