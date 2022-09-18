import React from 'react'
import styled from 'styled-components'
import Sun from "../../../assets/images/sun.svg"
import Fire from "../../../assets/images/fire.svg"
import Game from "../../../assets/images/game.svg"

function Savings() {
  return (
    <Savingss>
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
        </Savingss>
  )
}

const Savingss= styled.div`
    width: 470px;
    margin: 30px auto 0;
    box-shadow: 1px 1px 6px rgba(0,0,0,0.1);
`;
const SavingsContainer = styled.div`
    height: 190px;
    
`;
const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 0 30px;
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
    width: 110px;
    height: 115px;
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

export default Savings