import React, { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import styled from "styled-components";
import Dashboard from "../../../assets/images/dashboard.svg";
import Card from "../../../assets/images/card.svg";
import Savings from "../../../assets/images/savings.svg";
import Transactions from "../../../assets/images/transaction.svg";
import Settings from "../../../assets/images/settings.svg";
import Avatar from "../../../assets/images/avatar.jpg";
import Dot from "../../../assets/images/dot.svg";
import Dashboardwhite from "../../../assets/images/dashboardrename.svg";
import Savingswhite from "../../../assets/images/savingswhite.svg";
import Transactionswhite from "../../../assets/images/transactionwhite.svg";
import Settingsehite from "../../../assets/images/settingswhite.svg";
import Cardwhite from "../../../assets/images/cardwhite.svg" ;
import { Link, NavLink } from "react-router-dom";

function SideBar() {
  const [isActive, setIsActive] = useState(false);

  const _toggleImage = () => {
    setIsActive(!isActive);
  };


  // const [selected,setSelected] = useState(0)

  return (
    <SidebarContainer>
      <LogoContainer>
        <img src={Logo} alt="" />
      </LogoContainer>
      <MenuContainer>
        <MenuItem exact activeClassName="active" to="/" onClick={_toggleImage}>
          {/* className={selected===index?'menuItem active':'menuItem'} key={index} */}
          <MenuIcon>
          {isActive ? (
            <img src={Dashboard} sizes={20} alt="" />
          ) : (
            <img src={Dashboardwhite} size={22} alt="" />
          )}
          </MenuIcon>
          <MenuLink >Dashboard</MenuLink>
        </MenuItem>
        <MenuItem exact activeClassName="active" to="/cardsnot">
          <MenuIcon>
          {isActive ? (
            <img src={Card} sizes={20} alt="" />
          ) : (
            <img src={Cardwhite} size={22} alt="" />
          )}
          </MenuIcon>
          <MenuLink to="/cardsnot">My cards</MenuLink>
        </MenuItem>
        <MenuItem exact activeClassName="active" to="/savingsnot">
          <MenuIcon>
          {isActive ? (
            <img src={Savings} sizes={20} alt="" />
          ) : (
            <img src={Savingswhite} size={22} alt="" />
          )}
          </MenuIcon>
          <MenuLink to="/savingsnot">Savings</MenuLink>
        </MenuItem>
        <MenuItem exact activeClassName="active" to="/transactionnot">
          <MenuIcon>
          {isActive ? (
            <img src={Transactions} sizes={20} alt="" />
          ) : (
            <img src={Transactionswhite} size={22} alt="" />
          )}
          </MenuIcon>
          <MenuLink to="/transactionnot">Transactions</MenuLink>
        </MenuItem>
        <MenuItem exact activeClassName="active" to="/settingsnot">
          <MenuIcon>
            {isActive ? (
              <img src={Settings} sizes={20} alt="" />
           ) : (
              <img src={Settingsehite} size={22} alt="" />
            )}
          </MenuIcon>
          <MenuLink t0="/settingsnot">Settings</MenuLink>
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
  );
}

const SidebarContainer = styled.div`
  padding-top: 15px 15px;
  background: #f1f1f1;
  height: 100%;
  width: 220px;
  @media all and (max-width: 761px) {
    width:100%;
  }
`;
const LogoContainer = styled.div`
  width: 200px;
  cursor: pointer;
  @media all and (max-width: 761px) {
    display: block;
  }
  img {
    width: 100%;
    display: block;
  }
`;
const MenuContainer = styled.div`
  margin-top: 50px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  margin-bottom: 200px;
  @media all and (max-width: 761px) {
    display: none;
  }
`;
const MenuItem = styled(NavLink)`
  display: flex;
  align-content: center;
  justify-content: start;
  text-decoration: none;
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
  color: #747474;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #747474;
  }
  &:active {
    color: #000;
    margin-left: 0;
  }
  &:active::before {
    content: "";
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
  @media all and (max-width: 480px) {
    width: 90px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: 50%;
  }
`;
const AvatarContent = styled.h6`
  max-width: 80px;
  font-size: 12px;
  @media all and (max-width: 480px) {
    font-size: 16px;
  }
`;
const DotImage = styled.div`
  width: 30px;
  img {
    width: 100%;
    display: block;
  }
`;

export default SideBar;
