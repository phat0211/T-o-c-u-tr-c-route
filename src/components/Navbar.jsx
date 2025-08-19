import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Navbar() {

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user"); 
    window.location.href = "/login"; 
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyShop
        </Typography>

        <Button color="inherit" href="/">
          Trang chủ
        </Button>
        
        {user ? (
          <>
            <Typography variant="body1" sx={{ mx: 2 }}>
              Xin chào, <b>{user.email}</b>
            </Typography>
            <Button color="inherit" onClick={handleLogout}>
              Đăng xuất
            </Button>
          </>
        ) : (
          <Button color="inherit" href="/login">
            Đăng nhập
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
