import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Navigation from "./Navigation";
import NoMatch from "./NoMatch";
import Users from "./Users";
import userData from './userData'
import User from "./User";
import { useState } from "react";

const ReactRouter = () => {
  const [users, setUsers] = useState(userData);
  const navigate = useNavigate()

  const handleRemoveUser = (userId) => {
    setUsers((state) => state.filter((user) => user.id !== userId));

    navigate('/users')
    
    // if(role === 'admin'){
    //   navigate('/admin-dashboard')
    // } else if(role === 'teacher'){
    //   navigate('/teacher-dashboard')
    // } else if(role === 'student'){
    //   navigate('/student-dashboard')
    // }
  };


  return (
    <>
      <h1>React Router</h1>
      <Navigation />

      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={<div>Please select the category from nav menu</div>}
          />
          <Route path="home" element={<Home />} />
          {/* <Route path="admin-dashboard" element={<AdminDashabord />} />
          <Route path="teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="student-dashboard" element={<StudentDashboard />} /> */}
          <Route path="users" element={<Users users={users} />}>
            <Route path=":userId" element={<User onRemoveUser={handleRemoveUser} />} />
            {/*             
              url: http://localhost:3000/users/1
              userId="test" 
            */}

            {/* <Route
              path="profile"
              element={
                <div>
                  User profile
                  <div>
                    <Link to={`/users/profile/about`}>About</Link>
                    <Outlet />
                  </div>
                </div>
              }
            >
              <Route path="about" element={<div>User about detail</div>} />
            </Route> */}
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>

      {/*       
      /home => <Home />
      /user => <Users />

      <h1>React Router</h1>
      <Navigation />
        <Layout>
          <Home />
        </Layout>
      */}
    </>
  );
};

export default ReactRouter;
