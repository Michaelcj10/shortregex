/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";
import { Button, ImageLoader } from "dublinio-react";

const LandingStyle = styled.div`
  @media (max-width: 768px) {
  }
`;

function Landing() {
  return (
    <LandingStyle>
      <ImageLoader
        alt="something"
        src="https://dublinio.com/img/team/people/people-1.jpg"
        width="286px"
        height="286px"
      />
      <h1>Simple Regex</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
      </p>
      <Button
        onClick={() => {
          console.log("something");
        }}
        type="button"
        text="Something"
      />
    </LandingStyle>
  );
}

export default Landing;
