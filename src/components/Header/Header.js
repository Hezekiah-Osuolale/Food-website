import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import classes from './header.module.css';
import { useAuth } from '../../hooks/useAuth';

export default function Header() {
  const { user, logout } = useAuth();

  const { cart } = useCart();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
        <img className={classes.headerimage} src="/food-dinner-svgrepo-com.svg"  alt='cart' />
        </Link>
        <nav>
          <ul>
            {user ? (
              <li className={classes.menu_container}>
                <Link to="/dashboard"><img className={classes.headerimage} src="/user-svgrepo-com.svg"  alt='cart' /></Link>
                <div className={classes.menu}>
                  <Link to="/profile">Profile</Link>
                  <Link to="/orders">Orders</Link>
                  <a onClick={logout}>logout</a>
                </div>
              </li>
            ) : (
              <Link to="/login"><img className={classes.headerimage} src="/user-svgrepo-com.svg"  alt='cart' /></Link>
            )}

            <li>
              <Link to="/cart">
              <img className={classes.headerimage} src="/cart-plus-svgrepo-com.svg"  alt='cart' />
                {cart.totalCount > 0 && (
                  <span className={classes.cart_count}>{cart.totalCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
