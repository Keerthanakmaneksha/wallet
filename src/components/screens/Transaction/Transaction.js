import React from "react";
import styled from "styled-components";
import Down from "../../../assets/images/down.svg";
import Uparrow from "../../../assets/images/uparrow.svg";
import Downarrow from "../../../assets/images/downarrow.svg";
import Dott from "../../../assets/images/dot.svg";

function Transaction() {
  return (
    <Transactionn>
      <TransactionContainer>
        <TopContainer>
          <HeadingTransaction>Transaction</HeadingTransaction>
          <select>
                <option>March 2022</option>
                <option>April 2022</option>
                <option>May 2022</option>
                <option>June 2022</option>
            </select>
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
    </Transactionn>
  );
}

const Transactionn = styled.div`
  width: 430px;
  padding: 10px auto;
  margin-left: 25px;
  padding-top: 20px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  @media all and (max-width: 768px) {
    width: 450px;
    height: 350px;
  }
  @media all and (max-width: 360px) {
    height: 400px;
  }
`;
const TransactionContainer = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  @media all and (max-width: 480px) {
    margin-top: 30px;
  }
  @media all and (max-width: 480px) {
    margin-top: -4pxpx;
  }
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HeadingTransaction = styled.h5`
  font-size: 16px;
  color: #000;
  margin-top: 20px;
  @media all and (max-width: 768px) {
    font-size: 20px;
  }
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
  @media all and (max-width: 768px) {
    font-size: 16px;
  }
  @media all and (max-width: 360px) {
    font-size: 18px;
  }
`;
const DateLabel = styled.span`
  font-size: 11px;
  color: #747474;
  @media all and (max-width: 768px) {
    font-size: 16px;
  }
  @media all and (max-width: 360px) {
    font-size: 18px;
  }
`;
const Dot = styled.div`
  width: 15px;
  margin-top: 20px;
  @media all and (max-width: 768px) {
    font-size: 20px;
  }
  @media all and (max-width: 360px) {
    font-size: 16px;
  }
  img {
    display: block;
    width: 100%;
  }
`;

const Percentage = styled.h6`
  font-size: 11px;
  color: #75cd68;
  @media all and (max-width: 768px) {
    font-size: 14px;
  }
  @media all and (max-width: 360px) {
    font-size: 16px;
  }
`;
const PercentageRed = styled.h6`
  font-size: 11px;
  color: #e83737;
  @media all and (max-width: 768px) {
    font-size: 14px;
  }
  @media all and (max-width: 360px) {
    font-size: 16px;
  }
`;

export default Transaction;
