import React from "react";
import styled from "styled-components";

function Cards() {
  return (
    <div>
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
    </div>
  );
}

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
  margin: 0 auto;
  border-right: 1px solid #fff;
  :last-child {
    border-right: none;
  }
`;
const Label = styled.h5`
  color: #eeeeee;
  font-size: 12px;
  @media all and (max-width: 768px) {
    font-size: 18px;
    margin-left: 10px;
  }
`;
const Amount = styled.h3`
  font-weight: 700;
  font-size: 23px;
  color: #eeeeee;
`;
export default Cards;
