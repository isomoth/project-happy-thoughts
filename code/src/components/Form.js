import React, { useEffect, useState } from 'react';

import ThoughtForm from './ThoughtForm';
// import UserForm from './UserForm';
import ThoughtItem from './ThoughtItem';
import LoadingItem from './LoadingItem';

import { API_URL, LIKES_URL } from '../utils/urls';

export const Form = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState('');
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .finally(() => setLoading(false));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought, name: userName })
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts();
      });
  };
  /* 
  const handleUserSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: userName })
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts();
      });
  }; */

  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: 'POST'
    };
    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts();
      });
  };

  return (
    <div>
      <h1>Your Happy Thoughts!</h1>
      {loading && <LoadingItem />}
      <ThoughtForm
        onFormSubmit={handleFormSubmit}
        /* onUserSubmit={handleUserSubmit} */
        newThought={newThought}
        setNewThought={setNewThought}
        setUserName={setUserName}
      />
      {/*  <UserForm
        onUserSubmit={handleUserSubmit}
        newUser={userName}
        setUserName={setUserName}
      /> */}
      {thoughts.map((thought) => (
        <ThoughtItem
          key={thought._id}
          thought={thought}
          onLikesIncrease={handleLikesIncrease}
        />
      ))}
    </div>
  );
};

export default Form;
