import React from 'react';
import moment from 'moment';

const ThoughtItem = ({ thought, onLikesIncrease }) => {
  return (
    <div className='text-container'>
      <p>{thought.message}</p>
      <div className='thought-data'>
        <span className='likes-counter'>
          <button
            className='likes-button'
            onClick={() => onLikesIncrease(thought._id)}
          >
            {' '}
            <span className='button-heart' role='img' aria-label='heart'>
              ❤️&ensp;
            </span>{' '}
          </button>
          <p>x {thought.hearts}</p>
        </span>
        <p className='date'>{moment(thought.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};

export default ThoughtItem;
