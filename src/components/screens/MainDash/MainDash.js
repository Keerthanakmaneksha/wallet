import React from 'react'
import styled from 'styled-components';

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
    width: 473px;
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
    font-size: 28px;
    color: #eeeeee;
`; 


export default MainDash;