import React from "react";
import {
  DiCss3,
  DiExtjs,
  DiFirebase,
  DiGithub,
  DiLaravel,
  DiMongodb,
  DiNodejs,
  DiReact,
  DiZend,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import { motion, routeAnimation } from "framer-motion";
import { stagger, fadeInUp } from "../animation";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Back-end To Design
    </SectionText>
    <motion.div variants={stagger} initial="initial" animate="animate">
      <List>
        <ListItem>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experiece with <br />
              React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiFirebase size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node and Databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiZend size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br />
              tools like Adobe Photoshop
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <br />
      </List>
    </motion.div>
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className="grid grid-cols-12 pb-4"
    >
      <picture className="hover:text-blue-400">
        <DiReact size="3rem" />
      </picture>
      <picture className="hover:text-green-400">
        <DiNodejs size="3rem" />
      </picture>
      <picture className="hover:text-green-400">
        <DiMongodb size="3rem" />
      </picture>
      <picture className="hover:text-yellow-400">
        <DiLaravel size="3rem" />
      </picture>
      <picture className="hover:text-indigo-400">
        <DiGithub size="3rem" />
      </picture>
      <picture className="hover:text-blue-400">
        <DiCss3 size="3rem" />
      </picture>
    </motion.div>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
