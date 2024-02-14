import React, { useEffect, useState } from 'react';

// Рендер вiдбувається за аналогом onChange

const CreateUserForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  useEffect(() => {
    console.log('User Form render');
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { pass, email };

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      
      if (response.ok) {
        const newUser = await response.json();
        console.log('User was successfully created', newUser);
        // Clear form
      } else {
        console.error('Failed to create a user');
      }
    } catch (error) {
      console.error('Error when creating a user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{backgroundColor: 'lightcoral', padding:'10px'}}>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="pass">Password: </label>
        <input
          id="pass"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUserForm;
