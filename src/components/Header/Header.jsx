import React from 'react';
import { Logo } from './Logo';
import { Modal } from './Modal';
import Button from '../Button/Button';
import styled from 'styled-components';

export const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <HeaderNavigation>
          <ModalWrapper>
            <Logo/>
            <Modal></Modal>
          </ModalWrapper>
          <Nav>
            <NavItem>
              <NavLink href="#">Menu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact</NavLink>
            </NavItem>
          </Nav>
        </HeaderNavigation>
        <HeaderAccount>
          <NavItemAccount>
            <NavLinkAccount href="#">Login</NavLinkAccount>
          </NavItemAccount>
          <NavItemAccount>
            <Button href="#">Sign up</Button>
          </NavItemAccount>
        </HeaderAccount>
      </HeaderContainer>
    </header>
  );
};

const HeaderContainer = styled.div`
  margin: 48px 96px 24px 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -24px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgb(203, 203, 203);
  }

  @media screen and (max-width: 720px) {
    display: block;
  }

  @media screen and (min-width: 721px) and (max-width: 1280px) {
    margin: 34px 69px 17px 69px;
  }

  @media screen and (max-width: 720px) {
    margin: 31px;
  }
`;

const HeaderNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 103px;

  @media screen and (min-width: 721px) and (max-width: 1280px) {
    gap: 74px;
  }
`;

const ModalWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.ul`
  display: flex;
  gap: 54px;

  @media screen and (min-width: 721px) and (max-width: 1280px) {
    gap: 38px;
  }

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

const NavItem = styled.li`
  font-family: var(--second-family);
  font-size: 17.83px;
  font-weight: 500;
  line-height: 26.74px;

  @media screen and (min-width: 721px) and (max-width: 1280px) {
    font-size: 12.68px;
    line-height: 19.02px;
  }
`;

const NavLink = styled.a`
  color: #606060;
`;

const HeaderAccount = styled.ul`
  display: flex;
  gap: 9px;
  align-items: center;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

const NavItemAccount = styled.li`
  font-family: var(--second-family);
  font-size: 17.83px;
  font-weight: 500;
  line-height: 26.74px;

  @media screen and (min-width: 721px) and (max-width: 1280px) {
    font-size: 12.68px;
    font-weight: 700;
    line-height: 19.02px;
  }
`;

const NavLinkAccount = styled.a`
  color: #606060;
  padding: 18px;

  @media screen and (min-width: 721px) and (max-width: 1280px) {
    padding: 13px;
  }
`;

export default Header;
