import { useState } from "react";
import LifeCycle from "./LifeCycle";

const LifeCycleWrapper = () => {
  const [showComponent, setShowComponent] = useState(false)

  const handleShowToggle = () => {
    setShowComponent(!showComponent)
  }

  return (
    <div>
      <button onClick={handleShowToggle}>Show lifecycle component</button>
      {showComponent && <LifeCycle />}
    </div>
  );
};

export default LifeCycleWrapper;
