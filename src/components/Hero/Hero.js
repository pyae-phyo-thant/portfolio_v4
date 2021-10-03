import Link from "next/link";
import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { stagger, fadeInUp } from "../animation";
import { motion } from "framer-motion";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <SectionText>
            I'm FullStack Web Developer for now, I have passing for coding since
            I was 19 years old. I'm a self-learner and I learned web development
            by myself from w3schools and I'm willing to learn new technology.
            Now I have experience in both web and web app development.
          </SectionText>
        </motion.div>
        <Button>
          <Link href="/#tech">Learn More</Link>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
