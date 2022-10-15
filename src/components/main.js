import React from "react";
import styled from "styled-components";

const MainStyles = styled.main`
  margin: 0 auto;
  width: 90%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Main = (props) => {
  return (
    <MainStyles>
      <h1>COMA Clan</h1>
      <p>Website coming soon!</p>
      <p>
        Check out out Instagram{" "}
        <a href="https://www.instagram.com/the.coma.clan/">@coma.clan</a>
      </p>
    </MainStyles>
  );
};

export default Main;
