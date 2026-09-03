import { PageWrapper, HeroBanner, TextSection, Banner } from './index';
import video from '../assets/videos/OCEAN LOOP.mp4';
import CodeSvg from '../assets/icons/code.svg';

export const HomePage = () => {
  return (
    <>
      <HeroBanner
        title="Big Ideas. Bold Design."
        subtitle="rojomasrojo — Digital Design & Development Studio"
        description="We help ambitious brands design, build, and launch digital products that actually move the needle."
        linkText="See Our Work"
        linkURL="/projects"
        heroVideo={video}
        mode="simple"
        wave
      />
      <PageWrapper>
        <TextSection
          eyebrow="What We Do"
          title="Design. Build. Launch."
          text="From brand identity to full-stack web development, we handle every step of bringing your product to life — strategy, design, and code, all under one roof."
          image={CodeSvg}
        />

        <section className="row mobile-2">
          <Banner className="section-card section-card-white" isCard text="Web Design" />
          <Banner className="section-card" isCard text="Development" />
          <Banner className="section-card grow-mobile" isCard text="Branding" />
        </section>
      </PageWrapper>
    </>
  );
};
