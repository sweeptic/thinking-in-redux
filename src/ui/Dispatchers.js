import React from 'react';
import { connect } from 'react-redux';
import { fetchBooks, undoBooks } from '../redux/actions/books';

const Dispatchers = props => (
  <div className='dispatchers'>
    <button className='dispatch-button' onClick={() => props.fetchBooks('')}>
      <i className='fa fa-rocket' />
    </button>
    <button className='dispatch-button' onClick={() => props.undoBooks('')}>
      <i className='fa fa-undo' />
    </button>
  </div>
);

export default connect(null, { fetchBooks, undoBooks })(Dispatchers);
