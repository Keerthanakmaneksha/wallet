import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Search from "../../../assets/images/search.svg"
import Graphh from "../../../assets/images/graph.png"

function Graph() {

    const [isActive, setIsActive] = useState(false);

        const _toggleSearch = () => {
            setIsActive(!isActive);
        }

  return (
    <GraphContainer>
        <SearchContainer isSearching={isActive}>
            <SearchIconButton onClick={_toggleSearch} placeholder="Search documents,keywords etc.">
                  {  isActive ? (<img src={Search} sizes={16} alt="" />  ):(
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
                        <ColorBox></ColorBox> 
                        <Attribute>Income</Attribute>
                    </RightItem>
                    <RightItem>
                        <ColorBox></ColorBox> 
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
    </GraphContainer>
  )
}

const GraphContainer = styled.div`
    padding: 15px;
`;
const SearchContainer = styled.div`
    position: relative;
    width: ${(props) => (props.isSearching ? 360 : 340)}px;
    height: 48px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5px;
    transition: all 0.3s ease; 
    margin: 0 auto;
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
    box-shadow: 1px 1px 6px rgba(0,0,0,0.1);
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
const ColorBox = styled.div`
    width: 10px;
    height: 10px;
    background: red;
    margin-right: 10px;
`;
const Attribute = styled.span`
    font-size: 14px;
    color: #747474;
    margin-right: 20px;
`;
const Bottom = styled.div`

`;
const ChartImageContainer = styled.div`
    width: 345px;
    margin: 0 auto;
    img {
        display: block;
        width: 100%;
    }
`;


export default Graph