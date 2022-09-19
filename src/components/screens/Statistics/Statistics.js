import React, { useState } from "react";
import styled from "styled-components";
import ReactDatePicker from "react-datepicker";
import Down from "../../../assets/images/down.svg";
import Uparrow from "../../../assets/images/uparrow.svg";
import Downarrow from "../../../assets/images/downarrow.svg";
import Bargraph from "../../../assets/images/graph1.png";

function Statistics() {

  return (
    <div>
      <Statisticss>
        <SatisticsContainer>
          <TopContainer>
            <HeadingStatic>Statistics</HeadingStatic>
            <select>
                <option>March 2022</option>
                <option>April 2022</option>
                <option>May 2022</option>
                <option>June 2022</option>
            </select>
          </TopContainer>
          <BottomContainerStatic>
            <StaticItem>
              <Box>
                <ArrowIconStatic>
                  <img src={Uparrow} alt="" />
                </ArrowIconStatic>
              </Box>
              <Income>
                <LabelStatic>Total income </LabelStatic>
                <IncomAmount>$235</IncomAmount>
              </Income>
              <Change>
                <VariationBlue></VariationBlue>
              </Change>
              <Percentage>+20%</Percentage>
            </StaticItem>
            <StaticItem>
              <Box>
                <ArrowIconStatic>
                  <img src={Uparrow} alt="" />
                </ArrowIconStatic>
              </Box>
              <Income>
                <LabelStatic>Total income </LabelStatic>
                <IncomAmount>$235</IncomAmount>
              </Income>
              <Change>
                <VariationAqua></VariationAqua>
              </Change>
              <Percentage>+8%</Percentage>
            </StaticItem>
            <StaticItem>
              <Box>
                <ArrowIconStatic>
                  <img src={Downarrow} alt="" />
                </ArrowIconStatic>
              </Box>
              <Income>
                <LabelStatic>Total income </LabelStatic>
                <IncomAmount>$235</IncomAmount>
              </Income>
              <Change>
                <VariationPeach></VariationPeach>
              </Change>
              <Percentage>+8%</Percentage>
            </StaticItem>
          </BottomContainerStatic>
        </SatisticsContainer>
      </Statisticss>
    </div>
  );
}

const Div = styled.div`
    width: 300px;
    height: 200px;
`;
const Option = styled.div`
    width: 300px;
    height: 80px;
    font-size: 20px;
    background: blue;
    color:#000
    ;
`;
const Statisticss = styled.div`
  width: 460px;
  margin: 15px auto 0;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
`;
const SatisticsContainer = styled.div`
  margin-left: 20px;
  padding: 0 20px;
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 0 30px;
`;
const HeadingStatic = styled.h6`
  font-size: 16px;
  color: #000;
  margin-top: 20px;
  @media all and (max-width: 768px) {
    font-size: 18px;
  }
`; 
const Select = styled.select`
  border-radius: 20px;
  width: 114px;
  height: 34px;
  border: 1px solid #747474;
  padding: 5px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
const BottomContainerStatic = styled.div``;
const ArrowIcon = styled.span`
  width: 10px;
  img {
    display: block;
    width: 10px;
  }
`;
const StaticItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Box = styled.div`
  background: #000;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
const ArrowIconStatic = styled.div`
  width: 11px;
  @media all and (max-width: 768px) {
    width: 16px;
  }
  img {
    display: block;
    width: 10px;
  }
`;
const Income = styled.div``;
const LabelStatic = styled.span`
  font-size: 10px;
  color: #747474;
  @media all and (max-width: 768px) {
    font-size: 16px;
  }
`;
const IncomAmount = styled.h3`
  font-size: 12px;
  @media all and (max-width: 768px) {
    font-size: 16px;
  }
`;
const Change = styled.div`
  width: 200px;
  height: 20px;
  margin-top: 20px;
  background-image: url(${Bargraph});
`;
const VariationBlue = styled.div`
  background-color: #fec0a7;
  width: 100px;
  height: 20px;
  border-radius: 2px;
`;
const VariationAqua = styled.div`
  background-color: #98bde5;
  width: 50px;
  height: 20px;
  border-radius: 2px;
`;
const VariationPeach = styled.div`
  background-color: #98dbe5;
  width: 80px;
  height: 20px;
  border-radius: 2px;
`;
const Percentage = styled.h6`
  font-size: 11px;
  color: #000;
  @media all and (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Statistics;
