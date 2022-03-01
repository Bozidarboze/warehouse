import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { logout } from "../../redux/app/actions";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Warehouse", "Shops", "Logs"];

const Header = ({ logout, email }) => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    if (route === "Shops") {
      navigate("/shops");
    } else if (route === "Logs") {
      navigate("/logs");
    } else {
      navigate("/");
    }
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    window.sessionStorage.removeItem("token");
    logout();
  };

  return (
    <AppBar position='static' elevation={0} variant='outlined' sx={{ backgroundColor: "white" }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ display: "flex" }}>
            {pages.map((page) => (
              <Button
                onClick={() => handleNavigation(page)}
                key={page}
                sx={{ my: 2, mx: 1, display: "block", fontWeight: "bold", color: "#28234A" }}>
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, ml: "auto" }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Admin' src='/static/images/avatar/2.jpg' sx={{ backgroundColor: "#1976d2" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              <MenuItem>
                <Typography textAlign='center' color='#28234A'>
                  {email}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleLogOut}>
                <Typography textAlign='center' color='error'>
                  Log Out
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  email: state.authReducer.message.email,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
