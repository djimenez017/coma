import React from "react";
import styled from "styled-components";

const NavigationStyles = styled.nav`
  font-weight: bold;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const navigation = () => {
  return (
    <NavigationStyles>
      <div>COMA</div>
    </NavigationStyles>
  );
};

export default navigation;
