import * as React from "react";
import Navigation from "../components/navigation";
import GlobalStyles from "../styles/globalStyles";
import MainComponent from "../components/main";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <div>
      <Navigation />
      <GlobalStyles />
      <MainComponent />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
