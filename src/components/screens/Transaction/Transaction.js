import React from 'react'
import styled from 'styled-components';
import Down from "../../../assets/images/down.svg"
import Uparrow from "../../../assets/images/uparrow.svg"
import Downarrow from "../../../assets/images/downarrow.svg"
import Dott from "../../../assets/images/dot.svg"

function Transaction() {
  return (
    <Transactionn>
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
        </Transactionn>
  )
}

const Transactionn = styled.div`
    width: 430px;
    padding: 10px auto;
    margin-left: 25px;
    padding-top: 20px;
    box-shadow: 1px 1px 6px rgba(0,0,0,0.1);
`; 
const TransactionContainer = styled.div`
    margin-left: 50px;
    margin-right: 50px;
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
    padding: 5px 12px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:20px;
`; 

const ArrowIcon = styled.span`
    width: 10px;
    img {
        display: block;
        width: 10px;
    }
`; 
const BottomContainerTransaction= styled.div`

`;
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

const TimeChange = styled.div`
    
`;
const TransactionName = styled.h4`
   font-size: 14px;
   color:#000 ;
   font-weight: 400;
   margin-bottom: 4PX;
`;
const DateLabel = styled.span`
    font-size: 11px;
    color:#747474 ;
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


export default Transaction