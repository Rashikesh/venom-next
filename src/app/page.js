import FontBar from "@/components/FontBar";
import Header from "@/components/Header";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Interests from "@/components/Interests";
import BackgroundRoom from "@/components/FloatingPanels";
// import EffectsPanel from "@/components/EffectsPanel";

export default function Home() {
  return (
    <>
    <BackgroundRoom />
      <FontBar />
      <Header />

      <hr />

      <Education />

      <hr />

      <Projects />

      <hr />

      <Experience />

      <hr />

      <Skills />

      <hr />

      <Achievements />

      <hr />

      <Interests />
    </>
  );
}
