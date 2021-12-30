import styled from "styled-components";
import { NavLink as Link } from "react-router-dom"
import {FaBars} from "react-icons/fa"

export const Nav = styled.nav`
    background: white;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: left;
    padding: 0.5rem calc((100vw - 1000px)/2);
    z-index: 10;
    overflow: hidden;
    @media screen and (min-width: 768px){
        justify-content: left;
        position: static;
        background-color: white; 
        overflow: hidden;       
    }
`

export const NavLink = styled(Link)`
    color: pink;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 0.5rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.1rem;
    white-space: nowrap;
    

    &.active {
        color: #00F;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px){
        color: black;
        display: block;
        position: absolute;
        top: 20px;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`
