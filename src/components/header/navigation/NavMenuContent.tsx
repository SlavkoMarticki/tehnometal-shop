import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsPerson, BsPersonFill } from 'react-icons/bs';
import { FaSignOutAlt } from 'react-icons/fa';
import {
  RiShoppingCart2Line,
  RiShoppingCart2Fill,
  RiSearchFill
} from 'react-icons/ri';
import { AuthNavItem, Logo } from '.';
import { HoverableIcon } from '../../hoverable-icon';
import { NavLink } from 'react-router-dom';
import { signInServiceInstance } from '../../../services';
import NonAuthNavItem from './NonAuthNavItem';
import classNames from 'classnames';

interface IProps {
  isNavActive: boolean;
  isNavMenuOpen: boolean;
  setIsNavMenuOpen: (value: boolean) => void;
  isStickyActive: boolean;
}

export default function NavMenuContent(
  props: IProps
): React.ReactElement | null {
  const { isNavActive, isNavMenuOpen, setIsNavMenuOpen, isStickyActive } = props;
  const { signOut } = signInServiceInstance;

  const navItemClassName = classNames(
    "nav--item",
    {
      "nav--item-is-sticky": isStickyActive
    }
  )

  const navItemIconClassName = classNames(
    "nav--item nav--item__i",
    {
      "nav--item-is-sticky": isStickyActive
    }
  )

  /* Dekstop Nav Menu Group */
  if (isNavActive) {
    return (
      <>
        <Logo isNavActive={isNavActive} isNavMenuOpen={isNavMenuOpen} isStickyActive={isStickyActive} />
        <div className='nav--group nav-center-top'>
          <ul className='nav--list flex'>
            <li className={navItemClassName}>
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {' '}
                Home
              </NavLink>
            </li>
            <li className={navItemClassName}>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to='/categories'
              >
                Products
              </NavLink>
            </li>
            <li className={navItemClassName}>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to='/news'
              >
                News
              </NavLink>
            </li>
            <li className={navItemClassName}>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to='/about-us'
              >
                About Us
              </NavLink>
            </li>
            <li className={navItemClassName}>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to='/contact-us'
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='nav--group'>
          <ul className='nav--list flex nav--list__icons'>
            <li className={navItemIconClassName}>
              <HoverableIcon
                regularIcon={<CiSearch />}
                hoverIcon={<RiSearchFill />}
              />
            </li>

            <AuthNavItem>
              <li className={navItemIconClassName}>
                <HoverableIcon
                  regularIcon={<AiOutlineHeart />}
                  hoverIcon={<AiFillHeart />}
                  path='/favorites'
                />
              </li>
            </AuthNavItem>
            <AuthNavItem>
              <li className={navItemIconClassName}>
                <HoverableIcon
                  regularIcon={<BsPerson />}
                  hoverIcon={<BsPersonFill />}
                  path='/profile'
                />
              </li>
            </AuthNavItem>
            <li className={navItemIconClassName}>
              <HoverableIcon
                regularIcon={<RiShoppingCart2Line />}
                hoverIcon={<RiShoppingCart2Fill />}
                path='/cart'
              />
            </li>
            <NonAuthNavItem>
              <li className={navItemClassName}>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to='/auth/login'
                >
                  Sign In
                </NavLink>
              </li>
            </NonAuthNavItem>
            <AuthNavItem>
              <li className={navItemIconClassName} onClick={signOut}>
                <FaSignOutAlt />
              </li>
            </AuthNavItem>
          </ul>
        </div>
      </>
    );
  }

  /* Mobile Nav Menu Group */
  if (!isNavActive && isNavMenuOpen) {
    return (
      <>
        <div className='nav--group'>
          <ul className='nav--list flex nav--list__icons'>
            <li
              className='nav--item nav--item__i'
              onClick={() => {
                setIsNavMenuOpen(false);
              }}
            >
              <AuthNavItem>
                <HoverableIcon
                  regularIcon={<BsPerson />}
                  hoverIcon={<BsPersonFill />}
                  path='/profile'
                />
              </AuthNavItem>
            </li>
            <li
              className='nav--item nav--item__i'
              onClick={() => {
                setIsNavMenuOpen(false);
              }}
            >
              <HoverableIcon
                regularIcon={<RiShoppingCart2Line />}
                hoverIcon={<RiShoppingCart2Fill />}
                path='/cart'
              />
            </li>
          </ul>
          <ul className='nav--list flex flex-column'>
            <li
              className='nav--item'
              onClick={() => {
                setIsNavMenuOpen(false);
              }}
            >
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to='/'
              >
                {' '}
                <span>Home</span>
              </NavLink>
            </li>
            <li
              className='nav--item'
              onClick={() => {
                setIsNavMenuOpen(false);
              }}
            >
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to='/categories'
              >
                <span>Products</span>
              </NavLink>
            </li>
            <li
              className='nav--item'
              onClick={() => {
                setIsNavMenuOpen(false);
              }}
            >
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to='/news'
              >
                <span>News</span>
              </NavLink>
            </li>
            <li
              className='nav--item'
              onClick={() => {
                setIsNavMenuOpen(false);
              }}
            >
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to='/about-us'
              >
                <span>About Us</span>
              </NavLink>
            </li>
            <li
              className='nav--item'
              onClick={() => {
                setIsNavMenuOpen(false);
              }}
            >
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to='/contact-us'
              >
                <span>Contact Us</span>
              </NavLink>
            </li>
            <li
              className='nav--item'
              onClick={() => {
                setIsNavMenuOpen(false);
              }}
            >
              <NonAuthNavItem>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to='/auth/login'
                >
                  <span>Sign In</span>
                </NavLink>
              </NonAuthNavItem>
            </li>
          </ul>
          <ul className='nav--list flex flex-column'>
            <li className='nav--item nav--item__i'>
              <AuthNavItem>
                <FaSignOutAlt
                  onClick={() => {
                    signOut();
                    setIsNavMenuOpen(false);
                  }}
                />
              </AuthNavItem>
            </li>
            <li
              className='nav--item nav--item__i'
              onClick={() => {
                setIsNavMenuOpen(false);
              }}
            >
              <HoverableIcon
                regularIcon={<CiSearch />}
                hoverIcon={<RiSearchFill />}
              />
            </li>
            <li
              className='nav--item nav--item__i'
              onClick={() => {
                setIsNavMenuOpen(false);
              }}
            >
              <AuthNavItem>
                <HoverableIcon
                  regularIcon={<AiOutlineHeart />}
                  hoverIcon={<AiFillHeart />}
                />
              </AuthNavItem>
            </li>
          </ul>
          <Logo isNavActive={isNavActive} isNavMenuOpen={isNavMenuOpen} isStickyActive={isStickyActive} />
        </div>
      </>
    );
  }

  return null;
}
