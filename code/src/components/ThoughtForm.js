import React from 'react';
import CharacterCounter from './CharacterCounter';

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <form
      onSubmit={onFormSubmit}
      className='text-container'
      id='form-container'
    >
      <label htmlFor='newThought'>What´s making you happy right now? </label>
      <input
        id='newThought'
        type='text'
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
      />
      <div className='under-input'>
        <button
          className='send-thought'
          disabled={newThought.length < 5 || newThought.length > 140}
          type='submit'
        >
          <span role='img' aria-label='heart'>
            ❤️&ensp;
          </span>
          Send happy thought
          <span role='img' aria-label='heart'>
            &ensp;❤️
          </span>
        </button>
        <CharacterCounter characterCount={newThought.length} />
      </div>
    </form>
  );
};

export default ThoughtForm;
