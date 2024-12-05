import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '../components/Pagination';
import EditUser from '../components/EditUser';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(1);  
  const [editUser, setEditUser] = useState(null);  
  const [message, setMessage] = useState('');  
  const [searchTerm, setSearchTerm] = useState('');

  const fetchUsers = async (currentPage) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${currentPage}`);
      setUsers(response.data.data);
      setFilteredUsers(response.data.data);
      setTotalPages(response.data.total_pages); 
    } catch (error) {
      console.error('Failed to fetch users', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchTerm(query);

    const filtered = users.filter((user) =>
      user.first_name.toLowerCase().includes(query) ||
      user.last_name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    );
    setFilteredUsers(filtered);
  };

  const handleEditClick = (user) => {
    setEditUser(user);
  };

  const handleUpdateUser = async (updatedUser) => {
    try {
      const response = await axios.put(`https://reqres.in/api/users/${updatedUser.id}`, updatedUser);
      if (response.status === 200) {
        setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
        setFilteredUsers(filteredUsers.map(user => user.id === updatedUser.id ? updatedUser : user));
        setMessage('User updated successfully!');
      }
      setEditUser(null); // Close the edit form after successfull update
    } catch (error) {
      setMessage('Failed to update user.');
      console.error('Error updating user:', error);
    }
  };

  // Deleting a user
  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
      setFilteredUsers(filteredUsers.filter(user => user.id !== id));
      setMessage('User deleted successfully!');
    } catch (error) {
      setMessage('Failed to delete user.');
      console.error('Error deleting user:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className='Heading'>Users List</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by name or email"
        style={{ padding: '10px', width: '200px', marginBottom: '20px',marginLeft:'10px' }}
      />

      {message && <div className="message">{message}</div>}

      <div className="user-list">
        {filteredUsers.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt={user.first_name} />
            <div>{user.first_name} {user.last_name}</div>
            <div>{user.email}</div>
            <button onClick={() => handleEditClick(user)}>Edit</button>
            <button onClick={() => handleDeleteClick(user.id)}>Delete</button>
          </div>
        ))}
      </div>

      <Pagination currentPage={page} totalPages={totalPages} setPage={setPage} />

      {editUser && <EditUser user={editUser} onUpdate={handleUpdateUser} />}
    </div>
  );
};

export default UsersList;
