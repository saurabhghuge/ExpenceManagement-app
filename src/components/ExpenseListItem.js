import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt,note }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
       ₹{numeral(amount / 100).format('0,0.00')}
      <b>--</b>
      {moment(createdAt).format('MMMM Do, YYYY')}
      <b>--</b>
      {note}
    </p>
  </div>
);

export default ExpenseListItem;
