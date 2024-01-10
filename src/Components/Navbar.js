import './Navbar.css';
import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useNavigate } from 'react-router-dom';
import product from "../Components/Home Components/Products";
// import Logo from './Eyelet Designer - final logo.png';

export default function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);
    

    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />,
            location: "/"
        },
        {
            text: "Services",
            icon: <InfoIcon />,
             location:"/Service"
        },
        {
            text: "Products",
            icon: <CommentRoundedIcon />,
            location: "/products"
        },
        {
            text: "Cart",
            icon: <ShoppingCartRoundedIcon />,
            location: "/cart"
        },
    ];



    return (
        <nav>
            <div className="nav-logo-container">
                {/* <img src={Logo} alt="" /> */}
                <h2>Green Lens Agro services</h2>
            </div>
            <div className="navbar-links-container">
                <a href='/'>Home</a>
                <a href='/service'>Services</a>
                <a href="/products">Products</a>
                <a href="/About">About</a>
                 <a href="/cart">
                    <BsCart2 className="navbar-cart-icon" />
                </a>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        </nav>
    );
};

