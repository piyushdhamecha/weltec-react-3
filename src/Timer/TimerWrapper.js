import { useState } from "react";
import Timer from "./Timer";

const TimerWrapper = () => {
  const [showComponent, setShowComponent] = useState(false)

  const handleShowToggle = () => {
    setShowComponent(!showComponent)
  }

  return (
    <div>
      <button onClick={handleShowToggle}>Show timer component</button>
      {showComponent && <Timer />}
    </div>
  );
};

export default TimerWrapper;
