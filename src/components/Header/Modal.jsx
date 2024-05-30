import React from 'react';
import styled from 'styled-components';
import { Menu } from './Menu';


export const Modal = () => {
    return (
        <BurgerMenu> 
            <Menu />
        </BurgerMenu>
    );
};

const BurgerMenu = styled.div`
    cursor: pointer;
    
    @media screen and (min-width: 720px) {
        display: none;
    }
`;


export default Modal;