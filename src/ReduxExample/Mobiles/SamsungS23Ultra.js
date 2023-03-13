import { Button } from "@mui/material";

const SamsungS23Ultra = ({ badgeCount, setBadgeCount }) => {
  return (
    <div>
      <h3>S23 Ultra</h3>
      <Button variant="contained" onClick={() => setBadgeCount(badgeCount + 1)}>
        Add to cart
      </Button>
    </div>
  );
};

export default SamsungS23Ultra;
