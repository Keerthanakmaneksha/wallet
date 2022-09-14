import React from 'react'
import styled from 'styled-components';
import Sun from "../../../assets/images/sun.svg"
import Fire from "../../../assets/images/fire.svg"
import Game from "../../../assets/images/game.svg"


function MainDash() {
  return (
    <>
        <MainDashBoard>
        <Heading>Dashboard</Heading>
        <Card>
            <CardContainer>
                <CardItem>
                    <Label>Available amount</Label>
                    <Amount>$6,550</Amount>
                </CardItem>
                <CardItem>
                    <Label>Card balance</Label>
                    <Amount>$4,208</Amount>
                </CardItem>
                <CardItem>
                    <Label>Credit limit</Label>
                    <Amount>$20,000</Amount>
                </CardItem>
            </CardContainer>
        </Card>
        <Savings>
            <SavingsContainer>
                <TopContainer>
                    <Head>Savings</Head>
                    <CountLink to="/">Total 5 Walets</CountLink>
                </TopContainer>
                <BottomContainer>
                    <SavingsItem>
                        <Icon>
                            <img src={Sun} alt="" />
                        </Icon>
                        <SavingsAmount>$2250</SavingsAmount>
                        <SavingsLabel>Summer trip</SavingsLabel>
                    </SavingsItem>
                    <SavingsItem>
                        <Icon>
                            <img src={Fire} alt="" />
                        </Icon>
                        <SavingsAmount>$2250</SavingsAmount>
                        <SavingsLabel>Summer trip</SavingsLabel>
                    </SavingsItem>
                    <SavingsItem>
                        <Icon>
                            <img src={Game} alt="" />
                        </Icon>
                        <SavingsAmount>$2250</SavingsAmount>
                        <SavingsLabel>Summer trip</SavingsLabel>
                    </SavingsItem>
                </BottomContainer>
            </SavingsContainer>
        </Savings>
    </MainDashBoard>
    </>
    
  )
}
const MainDashBoard = styled.div``; 
const Heading = styled.h1`
    font-size: 28px;
    color:#000; 
    margin-left: 20px;
`; 
const Card = styled.div``; 
const CardContainer = styled.ul`
    background: #000;
    width: 410px;
    margin: 0 auto;
    display: flex;
    border: 1px solid #000;
    border-radius: 10px;
`; 
const CardItem = styled.li`
    list-style: none;
    width: 35%;
`; 
const Label = styled.h5`
    color: #eeeeee;
    font-size: 12px;
`; 
const Amount = styled.h3`
    font-weight: 700;
    font-size: 23px;
    color: #eeeeee;
`; 
const Savings= styled.div`
    width: 449px;
    margin: 40px auto;
    box-shadow: 1px 1px 6px rgba(0,0,0,0.1);
`;
const SavingsContainer = styled.div`

`;
const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
`;
const Head = styled.h2`
    font-size: 20px;
    color: #000;
    font-weight: 500;
`;
const CountLink = styled.span`
    color: #747474;
    font-size: 12px;
    text-decoration: underline;
    margin-top: 20px;
    :hover {
        cursor: pointer;
    }
`;
const BottomContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
    width: 400px;
    margin: 0 auto;
`;
const SavingsItem = styled.div`
    width: 120px;
    height: 135px;
    border-radius:5px;
    :nth-child(1n) {
        background: #FEC0A7;
    }
    :nth-child(2n) {
        background: #98BDE5;  
    }
    :nth-child(3n) {
        background: #98DBE5;
    }
`;
const Icon = styled.div`
    width: 28px;
    margin: 20px 0px 20px 20px;
    img {
        display: block;
        width: 100%;
    }
`;
const SavingsAmount = styled.div`
    font-size: 20px;
    color: #000;
    font-weight: 500;
    margin-left: 20px;
`;
const SavingsLabel = styled.div`
    font-size: 11px; 
    color: #000;
    margin-left: 20px;
`;


export default MainDash;