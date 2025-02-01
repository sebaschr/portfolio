import { TextSection } from './index';
import RobotSvg from '../assets/icons/robot.svg';
import CodeSvg from '../assets/icons/code.svg';
import MoneySvg from '../assets/icons/money.svg';


const Projects = () => {

  return (

    <div className="wrapper">
      <h1 className="page-title">Projects + Experience</h1>

      <TextSection
        title="viaPeople"
        eyebrow="United States / Costa Rica (Remote)"
        text="At viaPeople, I built the foundation for an AI-powered tool using OpenAI, crafting a scalable frontend with customizable dark and light themes for seamless user adaptability. I modernized legacy codebases, improving styling and mobile responsiveness without overhauling the tech stack. Handling Vue.js to TypeScript migrations solo, I boosted maintainability while designing sleek mobile and tablet views with a focus on accessibility. Whether fixing UI bugs or rolling out new features, my work directly impacts clients across multiple projects."
        image={RobotSvg}
      />

      <TextSection
        title="Konrad"
        eyebrow="San Jose, Costa Rica"
        text="At Konrad, I built and optimized banking and transportation websites, ensuring they were not just functional but polished and user-friendly. Working closely with clients and design teams, I tackled UI bugs and fine-tuned interfaces for a seamless experience. I integrated Adobe Experience Manager (AEM) and Java backend systems, creating dynamic, content-driven applications. I also spearheaded JavaScript-to-TypeScript migrations, enhancing code quality and scalability for long-term performance."
        textRight
        image={CodeSvg}

      />

      <TextSection
        title="Solasystem"
        eyebrow="Singapore (Remote)"
        text="During my time at SolaSystem, I built reusable React components with Chakra UI, streamlining frontend development across multiple views. I developed solutions using JavaScript, Node.js, and SQL, showcasing blockchain projects on the Solana network. Working with an international team remotely, I gained hands-on experience in Web3 development, enhancing my ability to collaborate across time zones."
        image={MoneySvg}

      />

    </div>

  );
};

export { Projects };
