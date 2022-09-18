import React, { useState } from 'react'
import Logo from "../../../assets/images/logo.png"
import styled from "styled-components"
import Dashboard from "../../../assets/images/dashboard.svg"
import Card from "../../../assets/images/card.svg"
import Savings from "../../../assets/images/savings.svg"
import Transactions from "../../../assets/images/transaction.svg"
import Settings from "../../../assets/images/settings.svg"
import Avatar from "../../../assets/images/avatar.jpg"
import Dot from "../../../assets/images/dot.svg"
import { Link } from 'react-router-dom'

function SideBar() {

    // const [selected,setSelected] = useState(0)


  return (
    <SidebarContainer>
        <LogoContainer>
            <img src={Logo} alt="" />
        </LogoContainer>
        <MenuContainer>
            <MenuItem >
            {/* className={selected===index?'menuItem active':'menuItem'} key={index} */}
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
                <MenuLink >Transactions</MenuLink>
            </MenuItem>
            <MenuItem>
                <MenuIcon>
                    <img src={Settings} alt="" />
                </MenuIcon>
                <MenuLink>Settings</MenuLink>
            </MenuItem>
        </MenuContainer>
        <BottomContainer>
            <AvatarImage>
                <img src={Avatar} alt="" />
            </AvatarImage>
            <AvatarContent>Jennifer Connelly</AvatarContent>
            <DotImage>
                <img src={Dot} alt="" />
            </DotImage>
        </BottomContainer>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
    padding-top: 15px 15px;
    background: #f1f1f1;
    height: 100%;
    width: 220px; 
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
    margin-top:50px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    margin-bottom: 200px;
`;
const MenuItem = styled.div`
    display: flex;
    align-content: center;
    justify-content: start;
`;
const MenuIcon = styled.span`
    margin-right: 12px;
    margin-top: 10px;
    width: 25px;
    img {
        width: 100%;
        display: block;
    }
`;
 const MenuLink = styled.div`
    font-size: 20px;
    text-decoration: none;
    margin: 10px;
    color:  #747474;
    cursor: pointer;
    &:hover,
    &:focus{
    color:  #747474;
    };
    &:active{
        color: #000;
        margin-left: 0;
    };
    &:active::before{
        content: '';
        width: 8px;
        height: 100%;
        background: #000;
    }
 `;
 const BottomContainer = styled.div`
    border-top: 1px solid #000;
    margin: 0 4%;
    display: flex;
    justify-content: center;
    align-items: center;
    `;
 const AvatarImage = styled.div`
    width: 30px;
    margin-right: 20px;
    img {
        width: 100%;
        display: block;
        border-radius: 50%;
    }
 `;
 const AvatarContent = styled.h6`
   max-width:80px ;
   font-size: 12px;
 `;
 const DotImage = styled.div`
    width: 30px;
    img {
        width: 100%;
        display: block;
    }
 `;



export default SideBar