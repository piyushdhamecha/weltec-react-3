import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "./Categories";
import Main from "./Main";
import Mobiles from "./Mobiles";

const ReduxExample = () => {
  const [badgeCount, setBadgeCount] = useState(0)
  
  return (
    <div>
      <Routes>
        <Route element={<Main badgeCount={badgeCount} />}>
          <Route index element={<Categories />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/mobiles/*" element={<Mobiles badgeCount={badgeCount} setBadgeCount={setBadgeCount} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ReduxExample;
