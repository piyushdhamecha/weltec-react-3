import { Button } from "@mui/material";
import { useState } from "react";

const MobileList = () => {
  const [mobile, setMobile] = useState("");
  return (
    <div>
      <ul>
        <li>
          <Button onClick={() => setMobile('Samsung')} size="small">Samsung</Button>
        </li>
        <li>
          <Button size="small">Apple</Button>
        </li>
      </ul>
      {mobile && <h5>{mobile}</h5>}
      {mobile && mobile === "Samsung" && (
        <ul>
          <li>S22 ultra</li>
          <li>S23 ultra</li>
        </ul>
      )}
    </div>
  );
};

export default MobileList;
