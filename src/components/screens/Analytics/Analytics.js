import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Search from "../../../assets/images/search.svg";
import Graphh from "../../../assets/images/graph.png";

function Analytics() {
  const [isActive, setIsActive] = useState(false);

  const _toggleSearch = () => {
    setIsActive(!isActive);
  };

  return (
    <AnalyticsContainer>
      <SearchContainer isSearching={isActive}>
        <SearchIconButton
          onClick={_toggleSearch}
          placeholder="Search documents,keywords etc."
        >
          {isActive ? (
            <img src={Search} sizes={16} alt="" />
          ) : (
            <img src={Search} size={22} alt="" />
          )}
        </SearchIconButton>
        <SearchInput />
      </SearchContainer>
      <Chart>
        <Top>
          <ChartHeading>Analytics</ChartHeading>
          <Right>
            <RightItem>
              <ColorBoxBlack></ColorBoxBlack>
              <Attribute>Income</Attribute>
            </RightItem>
            <RightItem>
              <ColorBoxGreen></ColorBoxGreen>
              <Attribute>Saving</Attribute>
            </RightItem>
          </Right>
        </Top>
        <Bottom>
          <ChartImageContainer>
            <img src={Graphh} alt="" />
          </ChartImageContainer>
        </Bottom>
      </Chart>
    </AnalyticsContainer>
  );
}

const AnalyticsContainer = styled.div`
  padding: 15px;
`;
const SearchContainer = styled.div`
  position: relative;
  width: ${(props) => (props.isSearching ? 360 : 320)}px;
  height: 48px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  transition: all 0.3s ease;
  width: 400px;
  margin-left: 20px;
  @media all and (max-width: 480px) {
    margin: 20px;
  }
`;
const SearchIconButton = styled.button`
  width: 33px;
  background: #fff;
  position: absolute;
  top: 13px;
  left: 17px;
  border: none;
  img {
    width: 100%;
    display: block;
  }
`;
const SearchInput = styled.input`
  padding-left: 48px;
  height: 75%;
  width: 100%;
  font-size: 16px;
  border: 1px solid #747474;
  border-radius: 5px;
`;
const Chart = styled.div`
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  width: 430px;
  height: 300px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 17px;
`;
const ChartHeading = styled.h4`
  font-size: 18px;
  color: #000;
  font-weight: 500;
  @media all and (max-width: 768px) {
    font-size: 28px;
  }
`;
const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;
const RightItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;
const ColorBoxBlack = styled.div`
  width: 10px;
  height: 10px;
  background: #0c0a0b;
  margin-right: 10px;
  @media all and (max-width: 360px) {
    width: 15px;
    height: 15px;
  }
`;
const ColorBoxGreen = styled.div`
  width: 10px;
  height: 10px;
  background: #5a9562;
  margin-right: 10px;
  @media all and (max-width: 360px) {
    width: 15px;
    height: 15px;
  }
`;
const Attribute = styled.span`
  font-size: 14px;
  color: #747474;
  margin-right: 20px;
  @media all and (max-width: 768px) {
    font-size: 20px;
  }
  @media all and (max-width: 360px) {
    font-size: 20px;
  }
`;
const Bottom = styled.div``;
const ChartImageContainer = styled.div`
  width: 305px;
  margin: 0 auto;
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 360px) {
    width: 310px;
  }
  img {
    display: block;
    width: 100%;
  }
`;

export default Analytics;
