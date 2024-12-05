// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Login';
// import UsersList from './components/UsersList';
// import EditUser from './components/EditUser';
// import './App.css';
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/users" element={<UsersList />} />
//         <Route path="/edit/:id" element={<EditUser />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import UsersList from './components/UsersList';
import EditUser from './components/EditUser';
import PrivateRoute from './components/PrivateRoute';  // Import PrivateRoute
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route - Login */}
        <Route path="/" element={<Login />} />
        
        {/* Protected Routes - Only accessible if the user is authenticated */}
        <Route path="/users" element={<PrivateRoute element={<UsersList />} />} />
        <Route path="/edit/:id" element={<PrivateRoute element={<EditUser />} />} />
      </Routes>
    </Router>
  );
}

export default App;
