import React from 'react'
import styled from 'styled-components';
import Cards from '../Cards/Cards';
import Savings from '../Savings/Savings';
import Statistics from '../Statistics/Statistics';

function Dash() {
  return (
    <DashContainer>
      <Dive>
         <Heading>Dashboard</Heading>
        <Cards />
        <Savings />
        <Statistics />
        </Dive>
    </DashContainer>
  )
}

const DashContainer = styled.div`
`
const Dive = styled.div`
  margin-left: 0px;
`;
const Heading = styled.h1`
    font-size: 28px;
    color:#000; 
    margin-left: 20px;
`;
export default Dash