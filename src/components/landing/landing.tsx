/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";
import { Button } from "dublinio-react";

const LandingStyle = styled.div`
  @media (max-width: 768px) {
  }
`;

function Landing() {
  return (
    <LandingStyle>
      <Button type="button" text="Something" />
    </LandingStyle>
  );
}

export default Landing;
