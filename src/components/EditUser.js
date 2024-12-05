import React, { useState, useEffect } from 'react';

const EditUser = ({ user, onUpdate }) => {
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);

  useEffect(() => {
    setFirstName(user.first_name);
    setLastName(user.last_name);
    setEmail(user.email);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, first_name: firstName, last_name: lastName, email };
    onUpdate(updatedUser);  
  };

  return (
    <div className="edit-user-form">
      <h3>Edit User</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update User</button>
        <button type="button" onClick={() => onUpdate(null)}>Cancel</button>
      </form>
    </div>
  );
};

export default EditUser;
