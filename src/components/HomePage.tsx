import { PageWrapper, HeroBanner, Marquee, TextSection, Banner } from './index';
import { useContactModal } from './ContactModalContext';
import video from '../assets/videos/OCEAN LOOP.mp4';
import CodeSvg from '../assets/icons/code.svg';

export const HomePage = () => {
  const { open } = useContactModal();

  return (
    <>
      <HeroBanner
        title="Big Ideas. Bold Design."
        subtitle="rojomasrojo — Digital Design & Development Studio"
        description="We help ambitious brands design, build, and launch digital products that actually move the needle."
        linkText="Get In Touch"
        onLinkClick={open}
        heroVideo={video}
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

        <section className="row">
          <Banner
            text="Let's Build Something Bold."
            subtext="Get in touch"
            className="section"
            onClick={open}
          />
        </section>
      </PageWrapper>
    </>
  );
};
