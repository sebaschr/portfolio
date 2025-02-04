import { TextSection, Banner } from './index';
import PortraitSvg from '../assets/icons/portrait.svg';
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();

  return (

    <div className="wrapper">

      <h1 className="page-title">about seb</h1>

      <TextSection
        text="I build things—websites, apps, ideas, and sometimes even the courage to try something totally new. My love for clean, functional, and accessible design keeps me glued to my screen, whether I’m refining an AI-powered tool, revamping a clunky UI, or obsessing over the perfect dark mode toggle.
        But coding isn’t my only creative outlet. I’m also building my own magazine, working on a clothing brand, and diving into video editing, photography, and whatever else sparks my curiosity. I’m still in university for software engineering, still learning, still trying to stay humble, and still spending way too much time in coffee shops. If it involves design, storytelling, or bringing ideas to life, I’m all in."
        image={PortraitSvg}
        textRight
      />

      <section className="row mobile-2">
        <Banner className="section-card section-card-white" isCard text="Photos" redirectToPage='/photos' />

        <Banner className="section-card grow-mobile" isCard text="MGZ" redirectToPage='/mgz' />
      </section>

    </div>

  );
};

export { About };
