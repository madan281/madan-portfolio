import About from './About';
import Experience from './Experience';
import Certifications from './Certifications';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import Blog from './Blog';

export default function SinglePage() {
  return (
    <div>
      <section id="about" className="pt-20"><About /></section>
      <section id="experience" className="pt-20"><Experience /></section>
      <section id="certifications" className="pt-20"><Certifications /></section>
      <section id="projects" className="pt-20"><Projects /></section>
      <section id="resume" className="pt-20"><Resume /></section>
      <section id="contact" className="pt-20"><Contact /></section>
      <section id="blog" className="pt-20"><Blog /></section>
    </div>
  );
}
