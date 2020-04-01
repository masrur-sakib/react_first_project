import React, { useRef } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../Login/useAuth';
import { Link } from 'react-router-dom';

const usePrevious = value => {
    const prev = useRef();
    useEffect(() => {
        console.log(value);
        prev.current = value;
    }, [value]);
    return prev.current;
}

const Header = () => {
    // const [count, setCount] = useState(0);
    // const previous = usePrevious(count);
    const auth = useAuth();
    // console.log(auth.user);
    return (
        <div className="header">
            <a href="/"><img src={logo} alt=""/></a>
            {/* <h1>Count: {count} Previous: {previous}</h1>
            <button onClick={()=>setCount(count-1)}>-</button>
            <button onClick={()=>setCount(count+1)}>+</button> */}
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                {/* <a href="/shipping">Shipping</a> */}
                {/* <a href="/login">Sign in</a> */}
                {/* <a href="/inventory">Manage Inventory</a> */}
                {
                    auth.user ? <a href="/login">Sign out</a>
                    : <a href="/login">Sign In</a>
                }
                {
                    auth.user && <span style={{color: 'orange'}}>{auth.user.name}</span>
                }
            </nav>
        </div>
    );
};

export default Header;