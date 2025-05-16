// src/components/AboutText.tsx
export function AboutText() {
  return (
    <div className="text-gray-900 lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
      <h2 className="font-cinzel text-4xl font-semibold tracking-tight sm:text-5xl">
        The foundation of Project Sanctuary
      </h2>
      <p className="font-quattrocento mt-6 text-xl/8">
        A week-long private retreat in Bali, designed to re-humanize, fill your
        heart with love, and connect deeply with extraordinary souls.
      </p>
      <p className="font-inter mt-6 text-base/7">
        For 7 nights / 8 days, Immerse yourself in nourishing activities
        including{" "}
        <span className="font-semibold">
          yoga, sound healing, somatic breath work, river blessings, fireside
          discussions and community dinners
        </span>
        , all curated to help you{" "}
        <span className="font-semibold">
          slow down, reconnect, and transform
        </span>
        . More than just a retreat, <span className="font-bold">Nucleus</span>{" "}
        is an awakening—an invitation to step fully into presence, embrace
        private and meaningful connection, and rediscover the beauty of simply{" "}
        <span className="font-semibold">being</span>.
      </p>
      <p className="font-inter mt-6 text-base/7">
        Welcome to the heart of{" "}
        <span className="font-bold">Project Sanctuary</span>.
      </p>
      <p className="font-inter mt-2 text-base/7">
        Welcome to <span className="font-extrabold text-2xl">Nucleus.</span>{" "}
        🌿✨
      </p>
      <div className="mt-6 text-center sm:text-left">
        {/* Button linking to /program */}
        <a
          href="/program"
          className="mt-6 inline-block rounded-md bg-yellow-300 px-6 py-3 text-base font-medium text-black hover:bg-yellow-500 transition"
        >
          View the Program
          <span className="text-xl"> &rarr;</span>
        </a>
      </div>
    </div>
  );
}
