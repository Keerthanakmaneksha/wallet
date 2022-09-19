import React from "react";
import styled from "styled-components";
import Analytics from "../Analytics/Analytics";
import Transaction from "../Transaction/Transaction";

function Right() {
  return (
    <Rightt>
      <RightContainer>
        <Analytics />
        <Transaction />
      </RightContainer>
    </Rightt>
  );
}
const Rightt = styled.div`
  @media all and (max-width: 768px) {
    margin-left: 50px;
  }
  @media all and (max-width: 640px) {
    margin-left: 0px;
    margin-right: 40px;
  }
  @media all and (max-width: 480px) {
  }
`;
const RightContainer = styled.div`
  margin-left: 0px;
  @media all and (max-width: 768px) {
    margin-left: 70px;
  }
`;
export default Right;
