import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Layout } from "../layout/Layout";
import { motion } from "framer-motion";
import { stagger, fadeInUp, routeAnimation } from "../components/animation";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [showDetail, setShowDetail] = useState(null);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category) => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <Layout>
      <motion.div
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        className="px-5 py-2 overflow-y-scroll"
        style={{ height: "80vh" }}
      >
        <ProjectsNavbar
          handlerFilterCategory={handlerFilterCategory}
          active={active}
        />

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="relative grid grid-cols-12 gap-4 my-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={fadeInUp}
              className="col-span-12 p-2 bg-black rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            >
              <ProjectCard
                showDetail={showDetail}
                setShowDetail={setShowDetail}
                project={project}
                key={project.name}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Projects;
