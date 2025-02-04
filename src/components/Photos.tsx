import { Banner } from './index';
import { images } from '../services/data';

export const Photos = () => {

  return (

    <div className="wrapper">
      <section className="row mobile-2 max-4">
        {images.map((img) => {
          return (
            <Banner
              className="section-card photo"
              isCard
              backgroundImage={img.src}
            />
          )
        })}


      </section>

    </div>

  );
};
