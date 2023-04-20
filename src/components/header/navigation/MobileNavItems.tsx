import { BsPerson, BsPersonFill } from 'react-icons/bs';
import { HoverableIcon } from '../../hoverable-icon';
import AuthNavItem from './AuthNavItem';
import {
  RiSearchFill,
  RiShoppingCart2Fill,
  RiShoppingCart2Line
} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import NonAuthNavItem from './NonAuthNavItem';
import { FaSignOutAlt } from 'react-icons/fa';
import { signInServiceInstance } from '../../../services';
import { CiSearch } from 'react-icons/ci';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Logo from './Logo';
import { useState } from 'react';
import { Modal } from '../../../portals';
import { SearchModal } from '../../modals';
import NavCartItemsDisplay from './NavCartItemsDisplay';
import useStore from '../../../hooks/useStore';

interface IMobileNavItemsProps {
  setIsNavMenuOpen: (value: boolean) => void;
  isNavActive: boolean;
  isNavMenuOpen: boolean;
  isStickyActive?: boolean;
}

export default function MobileNavItems(
  props: IMobileNavItemsProps
): React.ReactElement {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { setIsNavMenuOpen, isNavActive, isNavMenuOpen } = props;

  const {
    userStore: { doSignOut }
  } = useStore();

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
              regularIcon={
                <>
                  <RiShoppingCart2Line />
                  <NavCartItemsDisplay />
                </>
              }
              hoverIcon={
                <>
                  <RiShoppingCart2Fill />
                  <NavCartItemsDisplay />
                </>
              }
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
                  doSignOut();
                  setIsNavMenuOpen(false);
                }}
              />
            </AuthNavItem>
          </li>
          <li
            className='nav--item nav--item__i'
            onClick={() => {
              setIsModalOpen(true);
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
        <Logo
          isNavActive={isNavActive}
          isNavMenuOpen={isNavMenuOpen}
        />
        <Modal
          onClose={() => {
            setIsModalOpen(false);
          }}
          isOpen={isModalOpen}
        >
          <SearchModal />
        </Modal>
      </div>
    </>
  );
}
