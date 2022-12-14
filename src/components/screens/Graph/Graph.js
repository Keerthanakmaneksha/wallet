import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Search from "../../../assets/images/search.svg";
import Graphh from "../../../assets/images/graph.png";
import Down from "../../../assets/images/down.svg";
import Uparrow from "../../../assets/images/uparrow.svg";
import Downarrow from "../../../assets/images/downarrow.svg";
import Dott from "../../../assets/images/dot.svg";

function Graph() {
  const [isActive, setIsActive] = useState(false);

  const _toggleSearch = () => {
    setIsActive(!isActive);
  };

  return (
    <GraphContainer>
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
      <Transaction>
        <TransactionContainer>
          <TopContainer>
            <HeadingTransaction>Transaction</HeadingTransaction>
            <DateButton>
              march 2022
              <ArrowIcon>
                <img src={Down} alt="" />
              </ArrowIcon>
            </DateButton>
          </TopContainer>
          <BottomContainerTransaction>
            <TransactionItem>
              <Box>
                <ArrowIconTransaction>
                  <img src={Downarrow} alt="" />
                </ArrowIconTransaction>
              </Box>
              <TimeChange>
                <TransactionName>Monthly Groceries</TransactionName>
                <DateLabel>3 Apr 2022 at 3.15 PM</DateLabel>
              </TimeChange>
              <Percentage>+$2,20</Percentage>
              <Dot>
                <img src={Dott} alt="" />
              </Dot>
            </TransactionItem>
            <TransactionItem>
              <Box>
                <ArrowIconTransaction>
                  <img src={Uparrow} alt="" />
                </ArrowIconTransaction>
              </Box>
              <TimeChange>
                <TransactionName>Zabka Cashback</TransactionName>
                <DateLabel>3 Apr 2022 at 3.15 PM</DateLabel>
              </TimeChange>
              <PercentageRed>+$220</PercentageRed>
              <Dot>
                <img src={Dott} alt="" />
              </Dot>
            </TransactionItem>
            <TransactionItem>
              <Box>
                <ArrowIconTransaction>
                  <img src={Uparrow} alt="" />
                </ArrowIconTransaction>
              </Box>
              <TimeChange>
                <TransactionName>Transfer to card</TransactionName>
                <DateLabel>3 Apr 2022 at 3.15 PM</DateLabel>
              </TimeChange>
              <Percentage>+$80</Percentage>
              <Dot>
                <img src={Dott} alt="" />
              </Dot>
            </TransactionItem>
          </BottomContainerTransaction>
        </TransactionContainer>
      </Transaction>
    </GraphContainer>
  );
}

const GraphContainer = styled.div`
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
  width: 400px;
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
`;
const ColorBoxGreen = styled.div`
  width: 10px;
  height: 10px;
  background: #5a9562;
  margin-right: 10px;
`;
const Attribute = styled.span`
  font-size: 14px;
  color: #747474;
  margin-right: 20px;
`;
const Bottom = styled.div``;
const ChartImageContainer = styled.div`
  width: 345px;
  margin: 0 auto;
  img {
    display: block;
    width: 100%;
  }
`;
const Transaction = styled.div`
  width: 413px;
  margin: 10px auto;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
`;
const TransactionContainer = styled.div`
  margin: 0 30px;
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HeadingTransaction = styled.div`
  font-size: 16px;
  color: #000;
  margin-top: 20px;
`;
const DateButton = styled.button`
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

const ArrowIcon = styled.span`
  width: 10px;
  img {
    display: block;
    width: 10px;
  }
`;
const BottomContainerTransaction = styled.div``;
const TransactionItem = styled.div`
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
  margin-top: 20px;
`;
const ArrowIconTransaction = styled.div`
  width: 11px;
  img {
    display: block;
    width: 10px;
  }
`;

const TimeChange = styled.div``;
const TransactionName = styled.h4`
  font-size: 14px;
  color: #000;
  font-weight: 400;
  margin-bottom: 4px;
`;
const DateLabel = styled.span`
  font-size: 11px;
  color: #747474;
`;
const Dot = styled.div`
  width: 15px;
  margin-top: 20px;
  img {
    display: block;
    width: 100%;
  }
`;

const Percentage = styled.h6`
  font-size: 11px;
  color: #75cd68;
`;
const PercentageRed = styled.h6`
  font-size: 11px;
  color: #e83737;
`;

export default Graph;
