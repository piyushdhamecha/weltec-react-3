import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Navigation from "./Navigation";
import Users from "./Users";

const ReactRouter = () => {
  return (
    <>
      <h1>React Router</h1>
      <Navigation />
      <Routes>
        <Route element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users />} />
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
