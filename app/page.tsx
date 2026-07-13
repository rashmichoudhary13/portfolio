import About from "./about/page";
import Home from "./home/page";
import Skill from "./skill/page";
import Contact from "./contact/page";
import Projects from "./projects/page";

export default function Page() {
  return (
    <div>
      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </div>
  );
}
