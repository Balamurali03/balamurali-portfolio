import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
// import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";
import Summary from "./components/summary/Summary";
import MobileNavbar from "./components/layout/MobileNavbar";

export default function App() {
  return (
    <div className="bg-[#0b1118] text-gray-200 font-inter overflow-x-hidden">
      <Navbar />
<MobileNavbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      {/* <Blogs /> */}
      <Summary />
      <Contact />
      <Footer />
    </div>
  );
}
