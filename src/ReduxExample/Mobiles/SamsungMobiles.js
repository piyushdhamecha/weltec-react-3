import { Button, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import SamsungS23Ultra from "./SamsungS23Ultra";

const SamsungMobiles = ({
  badgeCount,
  setBadgeCount,
}) => {
  const [showMobileDetail, setShowMobileDetail] = useState(false);

  return (
    <div>
      <h2>Samsung</h2>
      <List dense={true}>
        <ListItem>
          <ListItemText
            primary={
              <Button
                variant="contained"
                onClick={() => setShowMobileDetail(!showMobileDetail)}
              >
                S23 Ultra
              </Button>
            }
          />
        </ListItem>
      </List>
      {showMobileDetail && <SamsungS23Ultra badgeCount={badgeCount} setBadgeCount={setBadgeCount} />}
    </div>
  );
};

export default SamsungMobiles;
