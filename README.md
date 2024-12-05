React User Management App:-
This is a simple user management app built with React that allows users to log in, view a paginated list of users, search through the list, edit user details, and delete users. The app uses a mock API from ReqRes to simulate fetching, updating, and deleting user data.

Features
1.User Login: Login with predefined credentials.
2.View Users: Displays a paginated list of users fetched from a mock API.
3.Search Functionality: Search users by name or email.
4.Edit User Details: Update user information like name and email.
5.Delete Users: Remove users from the list.
6.Responsive Design: The app is fully responsive, ensuring a smooth experience on all devices.
7.Interactive UI: Smooth hover transitions on buttons and box shadow effects for an enhanced UI.
Technologies Used
1.React (with hooks)
2.Axios for API requests
3.React Router for navigation
4.CSS for styling (custom and responsive)
Screenshots
1. Login Screen

2. Users List Screen

3. Edit User Form

Prerequisites
Before you begin, make sure you have the following installed on your system:

Node.js (v14 or higher)
npm (or yarn) for package management
Installation
To get started with the project, follow these steps:

1.Clone this repository:
git clone https://github.com/Tanyajha-2003/react-user-management.git
2.Navigate to the project directory:
cd react-user-management
3.Install the required dependencies: Using npm:
npm install
Or if you're using yarn:
yarn install
4.Running the Application
5.To run the app in development mode:
npm start
This will start the development server, and the app will be available at http://localhost:3000.

Usage
1.Login
The login screen allows users to enter their credentials (email and password). The credentials are predefined for this app:
Email: eve.holt@reqres.in
Password: cityslicka
Upon successful login, the app stores a token in the browser's localStorage and redirects the user to the Users List page.
2.Users List
This screen displays a paginated list of users fetched from the API.
Users can:
Search by first name, last name, or email.
Edit user details (first name, last name, email).
Delete users.
3.Pagination buttons allow the user to navigate through the list.
Edit User
4.The Edit User form allows users to update their profile details (name and email).
After submitting the form, the changes are reflected both in the UI and in the mock API.
Error Handling
If the login fails due to invalid credentials or network issues, an error message will be displayed to the user.
License
This project is licensed under the MIT License - see the LICENSE file for details.

