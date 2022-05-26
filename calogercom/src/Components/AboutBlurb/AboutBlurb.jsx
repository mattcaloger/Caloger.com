import React from "react";
import styled from "styled-components";

import TerminalCard from "../Terminal/TerminalCard";

const AboutBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export default function AboutBlurb() {
  return (
    <AboutBlock>
      <TerminalCard>
        <p>
          With over a year of software development experience and five years of
          experience in the IT industry, I greatly enjoy problem-solving and
          engineering solutions that help others succeed.
        </p>

        <p>
          Having started my career and education in the United States, I
          immigrated to Canada in 2018, having received permanent residency
          status at the end of 2019. I currently reside in Toronto, Ontario.
        </p>
      </TerminalCard>
    </AboutBlock>
  );
}
