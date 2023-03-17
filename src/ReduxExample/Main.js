import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Outlet } from "react-router-dom";

// import {connect} from 'react-redux'
import { useSelector } from "react-redux";

const Main = () => {
  // mapStateToProps alternative hook
  const badgeCount = useSelector((state) => {
    return state.badgeCount
  })

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Redux task
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={badgeCount} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </React.Fragment>
  );
};

export default Main 

// const mapStateToProps = (state) => {
//   return { badgeCount: state }
// }

// export default connect(mapStateToProps)(Main)


// const connect = (mapStateToProps, mapDispatchToProps) => (Component) => {
//   const reduxStateProps = mapStateToProps(state)
//   const reduxDispatchProps = mapDispatchToProps(dispatch)

//   return <Component {...reduxStateProps} {...reduxDispatchProps} />
// }
