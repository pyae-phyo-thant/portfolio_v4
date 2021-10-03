import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import { routeAnimation } from "../components/animation";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div variants={routeAnimation} initial="initial" animate="animate">
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Technologies />
        <Timeline />
        {/* <Acomplishments /> */}
      </Layout>
    </motion.div>
  );
};

export default Home;
