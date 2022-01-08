import React from 'react';
import CharacterCounter from './CharacterCounter';

const ThoughtForm = ({
  onFormSubmit,
  newThought,
  setNewThought,
  userName,
  setUserName
}) => {
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
        // name='thoughtInput'
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
      />
      <label htmlFor='newUser'>Your name (optional): </label>
      <input
        className='user-input'
        id='newUser'
        type='text'
        // name='userInput'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
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

        {/* <button
          className='send-userName'
          //   disabled={newUser.length < 3 || newUser.length > 20}
          type='submit'
        >
          Submit
        </button> */}
        <CharacterCounter characterCount={newThought.length} />
      </div>
    </form>
  );
};

export default ThoughtForm;
