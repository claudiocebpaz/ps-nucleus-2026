import React, { useState, useMemo } from "react";
import { ImageLibrary } from "../../utils/ImageUtils";
import ImagesSection, { ImageItem } from "../home/ImagesSection";
import TextSection, { FeatureItem } from "../home/TextSection";
import SelectorSection, { CohortItem } from "../home/SelectorSection";

type RoomProps = {
  roomData: {
    text: {
      price: string;
      title: string;
      subtitle: string;
      features: FeatureItem[];
    };
    selectors: {
      cohorts: CohortItem[];
      bookingOptions: { [key: number]: { label: string; link: string } };
    };
    imagesKey: string;
  };
  layoutType?: "even" | "uneven";
};

const Room: React.FC<RoomProps> = ({ roomData, layoutType = "uneven" }) => {
  const { text, selectors, imagesKey } = roomData;
  const cohorts: CohortItem[] = selectors.cohorts;

  // 🏆 Optimización: Solo obtener imágenes una vez
  const images: ImageItem[] = useMemo(
    () => ImageLibrary.getImages(imagesKey),
    [imagesKey]
  );

  // 🏆 Optimización: Solo calcular cohortes disponibles si cambian
  const availableCohorts = useMemo(
    () => cohorts.filter((cohort) => !cohort.soldout),
    [cohorts]
  );

  const defaultSelected = useMemo(
    () => (availableCohorts.length ? availableCohorts[0] : cohorts[0]),
    [availableCohorts, cohorts]
  );

  // 📌 Estado para el cohort seleccionado
  const [selectedCohort, setSelectedCohort] =
    useState<CohortItem>(defaultSelected);

  const isEvenLayout = layoutType === "even";

  return (
    <div
      className={`overflow-hidden ${
        isEvenLayout ? "bg-white" : "bg-gray-50"
      } py-12 sm:py-20`}
    >
      <div className="mx-auto max-w-10xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div
            className={`lg:col-span-8 ${
              isEvenLayout ? "lg:order-first" : "lg:order-last"
            }`}
          >
            <ImagesSection images={images} />
          </div>

          <div
            className={`lg:col-span-4 ${
              isEvenLayout ? "lg:order-last" : "lg:order-first"
            } space-y-8`}
          >
            <TextSection
              price={text.price}
              title={text.title}
              subtitle={text.subtitle}
              features={text.features}
            />
            <SelectorSection
              cohorts={cohorts}
              bookingOptions={selectors.bookingOptions}
              selectedCohort={selectedCohort}
              setSelectedCohort={setSelectedCohort}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
