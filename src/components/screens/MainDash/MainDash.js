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
                    <CountLink>Total 5 Walets</CountLink>
                </TopContainer>
                <BottomContainer>
                    <SavingsItem>
                        <Icon>
                            <img src={Sun} alt="" />
                        </Icon>
                        <SavingsAmount></SavingsAmount>
                        <SavingsLabel></SavingsLabel>
                    </SavingsItem>
                    <SavingsItem>
                        <Icon>
                            <img src={Fire} alt="" />
                        </Icon>
                        <SavingsAmount></SavingsAmount>
                        <SavingsLabel></SavingsLabel>
                    </SavingsItem>
                    <SavingsItem>
                        <Icon>
                            <img src={Game} alt="" />
                        </Icon>
                        <SavingsAmount></SavingsAmount>
                        <SavingsLabel></SavingsLabel>
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
    width: 410px;
    
`;
const SavingsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: space-between;
`;
const TopContainer = styled.div``;
const Head = styled.div``;
const CountLink = styled.div``;
const BottomContainer = styled.div``;
const SavingsItem = styled.div``;
const Icon = styled.div``;
const SavingsAmount = styled.div``;
const SavingsLabel = styled.div``;


export default MainDash;