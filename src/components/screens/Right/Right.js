import React from 'react'
import styled from 'styled-components'
import Analytics from '../Analytics/Analytics'
import Transaction from '../Transaction/Transaction'


function Right() {
  return (
    <Rightt>
      <RightContainer>
      <Analytics />
        <Transaction />
      </RightContainer>
    </Rightt>
  )
}
const Rightt = styled.div``;
const RightContainer = styled.div`
    margin-left: 0px;
`;
export default Right