/* eslint-disable */
import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsPerson, BsPersonFill } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { FaSignOutAlt } from 'react-icons/fa';
import {
  RiSearchFill,
  RiShoppingCart2Fill,
  RiShoppingCart2Line
} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { AuthNavItem, NavCartItemsDisplay, NonAuthNavItem } from '.';
import { HoverableIcon } from '../../hoverable-icon';
import Logo from './Logo';
import { SearchModal } from '../../modals';
import { Modal } from '../../../portals';
import useStore from '../../../hooks/useStore';

interface IDesktopNavItemsProps {
  isNavActive: boolean;
  isNavMenuOpen: boolean;
}

export default function DesktopNavItems(
  props: IDesktopNavItemsProps
): React.ReactElement {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const {
    userStore: { doSignOut }
  } = useStore();
  const { isNavActive, isNavMenuOpen } = props;

  return (
    <>
      <Logo
        isNavActive={isNavActive}
        isNavMenuOpen={isNavMenuOpen}
      />
      <div className='nav--group nav-center-top'>
        <ul className='nav--list flex'>
          <li className='nav--item'>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {' '}
              Home
            </NavLink>
          </li>
          <li className='nav--item'>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to='/categories'
            >
              Products
            </NavLink>
          </li>
          <li className='nav--item'>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to='/news'
            >
              News
            </NavLink>
          </li>
          <li className='nav--item'>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to='/about-us'
            >
              About Us
            </NavLink>
          </li>
          <li className='nav--item'>
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
          <li className={'nav--item nav--item__i'}>
            <HoverableIcon
              onClick={() => setIsModalOpen(true)}
              regularIcon={<CiSearch />}
              hoverIcon={<RiSearchFill />}
            />
          </li>

          <AuthNavItem>
            <li className={'nav--item nav--item__i'}>
              <HoverableIcon
                regularIcon={<AiOutlineHeart />}
                hoverIcon={<AiFillHeart />}
                path='/favorites'
              />
            </li>
          </AuthNavItem>
          <AuthNavItem>
            <li className={'nav--item nav--item__i'}>
              <HoverableIcon
                regularIcon={<BsPerson />}
                hoverIcon={<BsPersonFill />}
                path='/profile'
              />
            </li>
          </AuthNavItem>
          <li
            className={'nav--item nav--item__i'}
            style={{ position: 'relative' }}
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
          <NonAuthNavItem>
            <li className='nav--item'>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to='/auth/login'
              >
                Sign In
              </NavLink>
            </li>
          </NonAuthNavItem>
          <AuthNavItem>
            <li
              className={'nav--item nav--item__i'}
              onClick={doSignOut}
            >
              <FaSignOutAlt />
            </li>
          </AuthNavItem>
        </ul>
        <Modal
          onClose={() => {
            setIsModalOpen(false);
          }}
          isOpen={isModalOpen}
        >
          <SearchModal
            onClose={() => {
              setIsModalOpen(false);
            }}
          />
        </Modal>
      </div>
    </>
  );
}
