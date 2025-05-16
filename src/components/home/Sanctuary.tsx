// src/components/SanctuaryOverviewSection.tsx

import { ImageLibrary } from "../../utils/ImageUtils";
// import SanctuaryImage from "../assets/sanctuary.png";
import SanctuaryImage from "./SanctuaryImage";

const SanctuaryOverviewSection = () => {
  // Obtenemos las imágenes de la sección "sanctuary"
  const images = ImageLibrary.getImages("sanctuary");

  return (
    <section className="overflow-hidden bg-white py-12 sm:py-16">
      {/* Explicación de la locación */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
        <h2 className="font-cinzel text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Discover Our Sanctuary
        </h2>
        <p className="font-quattrocento mt-2 mb-4 text-lg text-gray-600">
          Dwa Chandra is an extraordinary space for hosting intimate and
          transformational gatherings.
        </p>
        <p className="mt-6 text-gray-600">
          Dwa Chandra is more than a retreat space—it's part of a living effort
          to protect and honor the heart of Bali. Nestled in the rice fields of
          Pejeng, it’s a sanctuary where nature, culture, and community meet.
          The land here holds stories—ancient carvings along the river, rituals
          in the nearby village, and lush jungle that's quickly disappearing
          under unchecked development. Every gathering, stay, and project at Dwa
          Chandra directly supports the preservation of this land and its
          traditions, ensuring Bali’s essence isn’t lost to rapid change.
        </p>
        <p className="mt-6 text-gray-600 mb-4">
          As a part of this unfolding journey, we found the first place we need
          to be in “right relationship” is with Bali herself. Over the last two
          years, we have worked alongside our neighbors to defend our village
          from aggressive developers, take stewardship of ricefields and jungle,
          to restablish venues key to the village life and cultural heritage.
        </p>
        {/* Imagen adicional debajo del párrafo */}
        <SanctuaryImage />
        <p className="mt-6 text-gray-600">
          Our private resort consists of two stunning villas built atop a river
          gorge with natural cave formations, surrounding rice fields and
          jungle.
        </p>
        <p className="mt-6 text-center text-xl lg:text-left text-gray-900">
          Located just 5km outside of Ubud, Bali.
        </p>
        <p className="mt-6 text-gray-600">
          The Dwa Chandra family is here to support you in creating a magical
          experience. <br />
          Our team is led by our two hostesses, Ewik and Egy, and consists of
          our chef, two butlers, three housekeepers, and groundskeepers.
        </p>
        <p className="mt-6 text-gray-600">
          We offer on-site spa services and have relationships with local
          healers, tour guides, and drivers for airport pick ups and trips to
          town.
        </p>
      </div>

      {/* Grilla de imágenes: 1 columna en móvil y 2 columnas en tablet/desktop */}
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {images.map((image) => (
            <div key={image.id} className="relative w-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-contain rounded shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Información adicional (Common Areas y Cuisine) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-6">
        <p className="mt-6 text-gray-600">
          <span className="text-2xl text-black font-semibold font-quattrocento">
            Common Areas.
          </span>
          <br />
          Our venue consists of two interconnected luxury villas, with living
          spaces and kitchens in both villas, a spa area, two infinity pools,
          two fire pits, and two family rooms with flatscreen TVs.
          <br />
          You will also have access to three yoga shalas, as well as private
          access to our beautiful river gorge with cave formations.
        </p>
        <p className="mt-6 text-gray-600">
          <span className="text-2xl text-black font-semibold font-quattrocento">
            Cuisine.
          </span>
          <br />
          Included in your stay, our Chef Edi (formerly at Locavore) serves a
          delicious breakfast every morning with high-quality, mostly organic
          ingredients. He can adapt to various dietary preferences. All-day
          dining is available until 10pm every night, with advance orders for
          groups.
        </p>
      </div>
    </section>
  );
};

export default SanctuaryOverviewSection;
