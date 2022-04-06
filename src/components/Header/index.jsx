import React from 'react';
import Logo from '../Logo';
import Search from '../Search';
import './index.css';

const Header = () => {
    return (
        <header>
            <Logo/>
            <Search/>
            <nav>Nav</nav>
        </header>
    )
}

export default Header;