import ProjectsSection from "../components/ProjectsSection.js";
import StackStrip from "../components/StackStrip.js";

export default function Projects() {
  const array: string[] = [
    "https://www.svgrepo.com/show/354200/postgresql.svg",
    "https://www.svgrepo.com/show/349540/typescript.svg",
    "https://www.svgrepo.com/show/452045/js.svg",
    "https://www.svgrepo.com/show/452091/python.svg",
    "https://www.svgrepo.com/show/473805/tensorflow.svg",
    "https://www.svgrepo.com/show/341962/keras.svg",
    "https://www.svgrepo.com/show/473742/pandas.svg",
    "https://www.svgrepo.com/show/373938/numpy.svg",
    "https://www.svgrepo.com/show/373554/django.svg",
    "https://www.svgrepo.com/show/376337/node-js.svg",
    "https://www.svgrepo.com/show/376367/express.svg",
    "https://www.svgrepo.com/show/331488/mongodb.svg",
    "https://www.svgrepo.com/show/378440/nextjs-fill.svg",
    "https://www.svgrepo.com/show/355190/reactjs.svg",
  ];

  return (
    <div className="w-full">
      <h1 className="mb-10 cabinet-700 text-xl text-para dark:text-foregroundDark">
        Technologies I use:
      </h1>
      <StackStrip imageArray={array} />
      <ProjectsSection />
    </div>
  );
}
