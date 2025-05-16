import { getRandomGlobalImage, ImageData } from "../../utils/ImageUtils";
import LogoImage from "../../assets/logosanctuary.webp";

const stats = [
  { name: "Consecutive Days", value: "8" },
  { name: "Activities", value: "45+" },
  { name: "Facilitators", value: "5+" },
  { name: "Human Connections", value: "Infinite" },
];

const randomImage: ImageData | null = getRandomGlobalImage();

export default function ActivitiesHeader() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24">
      {randomImage ? (
        <img
          alt={randomImage.alt}
          src={randomImage.src}
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        />
      ) : (
        <div className="absolute inset-0 -z-10 bg-gray-800 flex items-center justify-center text-white">
          No Image Available
        </div>
      )}
      {/* Overlay con opacidad */}
      <div className="absolute inset-0 bg-black opacity-75 -z-10" />

      {/* Container: aligned across screens */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:mx-0 flex items-center gap-4">
          <img
            src={LogoImage}
            alt="Sanctuary Logo"
            className="h-16 sm:h-24 w-auto"
          />
          <h2 className="font-cinzel text-5xl font-bold tracking-tight text-white sm:font-semibold sm:text-6xl">
            Nucleus Program
          </h2>
        </div>
        <p className="font-quattrocento mt-8 text-lg font-medium text-pretty text-gray-100 sm:text-xl/8 sm:mx-auto sm:max-w-2xl lg:max-w-max">
          A heartfelt invitation to unplug, embrace the present, and explore the
          beauty of simply being through movement, breathwork, gratitude, and
          shared moments of joy.
        </p>
        <p className="font-quattrocento mt-8 text-lg font-medium text-pretty text-gray-100 sm:text-xl/8 sm:mx-auto sm:max-w-2xl lg:max-w-max">
          The true magic of Nucleus unfolds in the present moment—through the
          unexpected connections, the shared silences, and the whispers of
          transformation that can’t be put into words.
        </p>
        <p className="font-quattrocento mt-8 text-lg font-semibold font-stretch-75% text-pretty text-yellow-300 sm:text-xl/8 sm:mx-auto sm:max-w-2xl lg:max-w-max">
          This is just a glimpse into the experiences that await you. What you
          see here is only the beginning.
        </p>
        <div className="mx-auto mt-8 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="font-quattrocento text-base/7 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
