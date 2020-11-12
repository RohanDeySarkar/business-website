import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Navbar() {

    const [anchorEl, setAnchorEl] =useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="navbar">
            <MoreVertIcon className="navbar__moreIcon" onClick={handleClick} />
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                style: {
                    maxHeight: 45 * 4.5,
                    width: '20ch',
                    backgroundColor: 'black',
                    overflow: "hidden",
                },
                }}
            >
                <MenuItem onClick={handleClose}>
                    <Link to='/'>Home</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to='/products'>Products</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to='/contact'>Contact</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to='/location'>Location </Link>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default Navbar
