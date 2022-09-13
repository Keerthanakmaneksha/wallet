import React from 'react'
import Logo from "../../../assets/images/logo.png"
import styled from "styled-components"
import Dashboard from "../../../assets/images/dashboard.svg"
import Card from "../../../assets/images/card.svg"
import Savings from "../../../assets/images/savings.svg"
import Transactions from "../../../assets/images/transaction.svg"
import Settings from "../../../assets/images/settings.svg"
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <SidebarContainer>
        <LogoContainer>
            <img src={Logo} alt="" />
        </LogoContainer>
        <MenuContainer>
            <MenuItem>
                <MenuIcon>
                    <img src={Dashboard} alt="" />
                </MenuIcon>
                <MenuLink>Dashboard</MenuLink>
            </MenuItem>
            <MenuItem>
                <MenuIcon>
                    <img src={Card} alt="" />
                </MenuIcon>
                <MenuLink>My cards</MenuLink>
            </MenuItem>
            <MenuItem>
                <MenuIcon>
                    <img src={Savings} alt="" />
                </MenuIcon>
                <MenuLink>Savings</MenuLink>
            </MenuItem>
            <MenuItem>
                <MenuIcon>
                    <img src={Transactions} alt="" />
                </MenuIcon>
                <MenuLink>Transactions</MenuLink>
            </MenuItem>
            <MenuItem>
                <MenuIcon>
                    <img src={Settings} alt="" />
                </MenuIcon>
                <MenuLink>Settings</MenuLink>
            </MenuItem>
        </MenuContainer>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
    padding-top: 15px;
    background: #747474;
`;
const LogoContainer = styled.div`
    width: 200px;
    cursor: pointer;
    img { 
          
        width: 100%;
        display: block;
    }
`;
const MenuContainer = styled.div`
    margin-top:20px;
    display: flex;
    flex-direction: column;
`;
const MenuItem = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
`;
const MenuIcon = styled.div`
    width: 25px;
    img {
        width: 100%;
        display: block;
    }
`;
 const MenuLink = styled(Link)`
    font-size: 20px;
    color: #747474;
 `;
export default SideBar