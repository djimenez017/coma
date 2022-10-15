import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  height: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const footer = () => {
  return (
    <FooterStyles>
      <p>Copyright Coma Clan</p>
    </FooterStyles>
  );
};

export default footer;
