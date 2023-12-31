import React from "react";
import SectionTop from "./statistics/StatisticsTop";
import SectionBottom from "./statistics/StatisticsBottom";
import { styled } from "styled-components";

/************** STYLES ********************/
const StylesContainer = styled.section`
  background-color: hsl(227deg 31% 95%);
  text-align: center;
  padding: 5rem;
  padding-top: 8rem;
`;

/************** COMPONENT ********************/

const StatisticsSection = () => {
  return (
    <StylesContainer>
      <SectionTop />
      <SectionBottom />
    </StylesContainer>
  );
};

export default StatisticsSection;
