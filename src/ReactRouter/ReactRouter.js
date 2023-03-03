import { Link, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Navigation from "./Navigation";
import NoMatch from "./NoMatch";
import Users from "./Users";
import users from './userData'
import User from "./User";

const ReactRouter = () => {
  

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
          <Route path="users" element={<Users users={users} />}>
            <Route path=":id" element={<User />} />
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
