import { Banner, PageWrapper } from './index';
import { images } from '../services/data';

export const Photos = () => {

  return (

    <PageWrapper>
      <section className="row mobile-2 max-4">
        {images.map((img) => {
          return (
            <Banner
              className="section-card photo"
              isCard
              backgroundImage={img.src}
              hideOverlay
            />
          )
        })}


      </section>

    </PageWrapper>

  );
};
