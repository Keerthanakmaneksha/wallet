import React from 'react'
import styled from 'styled-components'
import Search from "../../../assets/images/search.svg"

function Graph() {
  return (
    <GraphContainer>
        <SearchContainer>
            <SearchIconButton>
                <img src={Search} alt="" />
            </SearchIconButton>
            <SearchInput />
        </SearchContainer>
    </GraphContainer>
  )
}

const GraphContainer = styled.div``;
const SearchContainer = styled.div`
    position: relative;
    width: 360px;
    height: 48px;
    background: #f2f2f2;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5px;
    transition: all 0.3s ease;
`;
const SearchIconButton = styled.div``;
const SearchInput = styled.input`
    padding-left: 48px;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: transparent;
    outline: none;
    font-size: 16px;
    border: 1px solid transparent;

    &focus {
        border-color: rgba(0,0,0,0.3);
    }
`;

export default Graph