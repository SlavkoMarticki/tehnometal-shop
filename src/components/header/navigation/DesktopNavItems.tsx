/* eslint-disable */
import { useState } from "react";
import classNames from "classnames";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaSignOutAlt } from "react-icons/fa";
import { RiSearchFill, RiShoppingCart2Fill, RiShoppingCart2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { AuthNavItem, NonAuthNavItem } from ".";
import { signInServiceInstance } from "../../../services";
import { HoverableIcon } from "../../hoverable-icon";
import Logo from "./Logo";
import { SearchModal } from "../../modals";
import { Modal } from "../../../portals";

interface IDesktopNavItemsProps {
  isNavActive: boolean;
  isNavMenuOpen: boolean;
  isStickyActive: boolean;
}

export default function DesktopNavItems(props: IDesktopNavItemsProps): React.ReactElement {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { signOut } = signInServiceInstance;
  const { isNavActive, isNavMenuOpen, isStickyActive } = props;

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
  console.log(isModalOpen)
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
          <li className={navItemIconClassName} >
            <HoverableIcon
              onClick={() => setIsModalOpen(true)}
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
        <Modal
          onClose={() => { setIsModalOpen(false) }}
          isOpen={isModalOpen}
        >
          {/* <SearchModal /> */}
          hello world
        </Modal>
      </div>
    </>
  );
}