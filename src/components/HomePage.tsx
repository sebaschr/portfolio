import { Banner } from './index';
import video from '../assets/videos/OCEAN LOOP.mp4'

export const HomePage = () => {
  return (

    <div className="wrapper">

      <section className="row">
        <Banner
          text="hi i'm seb"
          subtext="developer / designer / creative"
          backgroundVideoLocalSrc={video}
        />
      </section>

      <section className="row mobile-2">
        <Banner
          text="i’m a passionate developer & media creator. do you have an idea? let’s get it going, i love challenges."
          isCard
          className="row-two-thirds banner-secondary"
        />
        <Banner
          backgroundImage="https://www.creativefabrica.com/wp-content/uploads/2023/08/03/Retro-Cartoon-Faces-30s-to-60s-Inspired-Graphics-76102320-1-1-580x387.jpg"
          backgroundImageHover="https://www.creativefabrica.com/wp-content/uploads/2023/08/03/Retro-Cartoon-Faces-30s-to-60s-Inspired-Graphics-76102906-1-1-580x387.jpg"
          isCard
          hideOverlay
        />
      </section>

      <section className="row mobile-2">
        <Banner className="section-card section-card-white" isCard text="projects" redirectToPage={'/projects'} />
        <Banner
          className="section-card section-card-vertical"
          isCard
          text="about"
          backgroundImage="https://i.pinimg.com/736x/e4/db/8a/e4db8a28ec9b9d8c9d9e25efafcba7b9.jpg"
          redirectToPage={'/about'}
        />
        <Banner className="section-card grow-mobile" isCard text="others" redirectToPage={'/mgz'} />
      </section>

      <section className="row">
        <Banner text="Photography" backgroundImage="https://i.imgur.com/DOdqEsB.jpeg" className="section" redirectToPage={'/photos'} />
      </section>

      <section className="row">
        <Banner text="Jumping Mice" backgroundImage="https://i.imgur.com/1SCaXF2.jpeg" className="section section-left" redirectToPage={'/mgz'} />
      </section>
    </div>

  );
};
