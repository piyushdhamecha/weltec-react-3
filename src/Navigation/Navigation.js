import { Button } from "@mui/material";
import { useState } from "react";
import HeadphoneList from "./HeadphoneList";
import MobileList from "./MobileList";

const Navigation = () => {
  const [item, setItem] = useState("");
  return (
    <div>
      <h3>Items</h3>
      <Button variant="contained" onClick={() => setItem("Mobile")}>
        Mobile
      </Button>
      <Button variant="contained" onClick={() => setItem("Headphones")}>
        Headphones
      </Button>
      <section>
        {item && (<h4>{item}</h4>)}
        {item && item === "Mobile" && <MobileList />}
        {item && item === "Headphones" && <HeadphoneList />}
      </section>
    </div>
  );
};

export default Navigation;
