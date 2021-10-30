import React from 'react';

const CharacterCounter = ({ characterCount }) => {
  const maxLength = 140;
  return (
    <p
      style={characterCount > maxLength ? { color: 'red' } : { color: 'black' }}
    >
      {maxLength - characterCount} / {maxLength}
    </p>
  );
};
export default CharacterCounter;
