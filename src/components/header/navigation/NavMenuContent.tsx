import React from 'react';
import { CiSearch } from 'react-icons/ci';
import {
  AiOutlineHeart,
  AiFillHeart
} from 'react-icons/ai';
import {
  BsPerson,
  BsPersonFill
} from 'react-icons/bs';
import {
  RiShoppingCart2Line,
  RiShoppingCart2Fill,
  RiSearchFill
} from 'react-icons/ri';
import { Logo } from '.';
import { IoMdArrowDropdown } from 'react-icons/io';
import { HoverableIcon } from '../../hoverable-icon';

interface IProps {
  isNavActive: boolean;
  isNavMenuOpen: boolean;
}

export default function NavMenuContent(
  props: IProps
): React.ReactElement | null {
  const { isNavActive, isNavMenuOpen } = props;

  if (isNavActive) {
    return (
      <>
        <Logo
          isNavActive={isNavActive}
          isNavMenuOpen={isNavMenuOpen}
        />
        <div className='nav--group'>
          <ul className='nav--list flex'>
            <li className='nav--item'>Home</li>
            <li className='nav--item '>
              Products
            </li>
            <li className='nav--item'>News</li>
            <li className='nav--item'>
              About Us
            </li>
            <li className='nav--item'>
              Contact Us
            </li>
          </ul>
        </div>
        <div className='nav--group'>
          <ul className='nav--list flex nav--list__icons'>
            <li className='nav--item nav--item__i'>
              <HoverableIcon
                regularIcon={<CiSearch />}
                hoverIcon={<RiSearchFill />}
              />
            </li>
            <li className='nav--item nav--item__i'>
              <HoverableIcon
                regularIcon={<AiOutlineHeart />}
                hoverIcon={<AiFillHeart />}
              />
            </li>
            <li className='nav--item nav--item__i'>
              <HoverableIcon
                regularIcon={<BsPerson />}
                hoverIcon={<BsPersonFill />}
              />
            </li>
            <li className='nav--item nav--item__i'>
              <HoverableIcon
                regularIcon={
                  <RiShoppingCart2Line />
                }
                hoverIcon={
                  <RiShoppingCart2Fill />
                }
              />
            </li>
          </ul>
        </div>
      </>
    );
  }
  if (!isNavActive && isNavMenuOpen) {
    return (
      <>
        <div className='nav--group'>
          <ul className='nav--list flex nav--list__icons'>
            <li className='nav--item nav--item__i'>
              <HoverableIcon
                regularIcon={<BsPerson />}
                hoverIcon={<BsPersonFill />}
              />
            </li>
            <li className='nav--item nav--item__i'>
              <HoverableIcon
                regularIcon={
                  <RiShoppingCart2Line />
                }
                hoverIcon={
                  <RiShoppingCart2Fill />
                }
              />
            </li>
          </ul>
          <ul className='nav--list flex flex-column'>
            <li className='nav--item'>
              <span>Home</span>
            </li>
            <li className='nav--item '>
              <span> Products </span>
            </li>
            <li className='nav--item'>
              <span>News</span>
            </li>
            <li className='nav--item'>
              <span>About Us</span>
            </li>
            <li className='nav--item'>
              <span>Contact Us</span>
            </li>
          </ul>

          <ul className='nav--list flex flex-column'>
            <li className='nav--item nav--item__i'>
              <HoverableIcon
                regularIcon={<CiSearch />}
                hoverIcon={<RiSearchFill />}
              />
            </li>
            <li className='nav--item nav--item__i'>
              <HoverableIcon
                regularIcon={<AiOutlineHeart />}
                hoverIcon={<AiFillHeart />}
              />
            </li>
          </ul>
          <Logo
            isNavActive={isNavActive}
            isNavMenuOpen={isNavMenuOpen}
          />
        </div>
      </>
    );
  }

  return null;
}
