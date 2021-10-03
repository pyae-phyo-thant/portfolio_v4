import Link from "next/link";
import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I'm FullStack Web Developer for now, I have passing for coding since I
          was 19 years old. I'm a self-learner and I learned web development by
          myself from w3schools and I'm willing to learn new technology. Now I
          have experience in both web and web app development.
        </SectionText>
        <Button>
          <Link href="/#tech">Learn More</Link>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
