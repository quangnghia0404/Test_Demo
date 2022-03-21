import React from 'react';
import './header.css';
import logo from '../../img/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
            <span className='tittle'>Đặt lại mật khẩu</span>
        </div>
    );
}

export default Header;
