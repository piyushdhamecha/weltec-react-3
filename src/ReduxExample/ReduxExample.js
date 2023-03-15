import { Route, Routes } from "react-router-dom";
import Categories from "./Categories";
import Main from "./Main";
import Mobiles from "./Mobiles";

const ReduxExample = () => {
  // const [badgeCount, setBadgeCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route element={<Main />}>
          <Route index element={<Categories />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/mobiles/*" element={<Mobiles />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ReduxExample;
