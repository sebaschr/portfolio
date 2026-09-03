import { PageWrapper, HeroBanner, Marquee, TextSection, Banner } from './index';
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

      <Marquee text="Web Design ✦ Branding ✦ Development ✦ Digital Strategy ✦" />

      <PageWrapper>
        <TextSection
          eyebrow="What We Do"
          title="Design. Build. Launch."
          text="From brand identity to full-stack web development, we handle every step of bringing your product to life — strategy, design, and code, all under one roof."
          image={CodeSvg}
        />

        <section className="row mobile-2">
          <Banner className="section-card section-card-compact section-card-white" isCard text="Web Design" />
          <Banner className="section-card section-card-compact" isCard text="Development" />
          <Banner className="section-card section-card-compact grow-mobile" isCard text="Branding" />
        </section>

        <h1 className="page-title">selected work</h1>

        <section className="row mobile-2">
          <Banner
            className="section-card"
            isCard
            backgroundImage="https://i.imgur.com/R8kDLOK.jpg"
            text="Lumen & Co"
            subtext="Brand Identity & Web Design"
            redirectToPage="/projects"
          />
          <Banner
            className="section-card"
            isCard
            backgroundImage="https://i.imgur.com/qPW75Ok.jpg"
            text="Northside Coffee"
            subtext="E-Commerce Development"
            redirectToPage="/projects"
          />
        </section>
        <section className="row mobile-2">
          <Banner
            className="section-card"
            isCard
            backgroundImage="https://i.imgur.com/o2SDuvI.jpg"
            text="Verve Studio"
            subtext="Digital Campaign"
            redirectToPage="/projects"
          />
          <Banner
            className="section-card"
            isCard
            backgroundImage="https://i.imgur.com/3fJ6fJa.jpg"
            text="Aster Finance"
            subtext="Product Design"
            redirectToPage="/projects"
          />
        </section>

        <section className="row">
          <Banner
            text="Let's Build Something Bold."
            subtext="Get in touch"
            className="section"
            redirectToPage="/projects"
          />
        </section>
      </PageWrapper>
    </>
  );
};
