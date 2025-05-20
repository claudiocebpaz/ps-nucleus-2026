// src/components/RoomsOverview.tsx

import { HashLink } from "react-router-hash-link";

// Configura el offset en píxeles
const CONFIGURABLE_OFFSET = -60;

// Función de scroll con timeout de 300ms para esperar a que el destino esté cargado
const scrollWithOffset = (el: HTMLElement) => {
  setTimeout(() => {
    const targetPosition =
      el.getBoundingClientRect().top + window.scrollY + CONFIGURABLE_OFFSET;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  }, 300);
};

export default function RoomsOverview() {
  return (
    <section className="border-t border-gray-500 bg-gray-950 text-white">
      <div className="bg-gray-950 p-8 max-w-7xl mx-auto mt-12">
        <h2 className="font-cinzel text-4xl font-bold mb-4">Rooms Overview</h2>
        <p className="font-quattrocento text-lg text-gray-300 mx-auto">
          Experience luxury and tranquility at Dwa Chandra. <br />
          Choose from a variety of thoughtfully designed rooms, each offering
          comfort, privacy, and stunning views of the jungle and river.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Single Rooms Overview */}
          <div className="border border-gray-700 rounded-lg p-6">
            <h3 className="font-quattrocento text-2xl font-semibold mb-4">
              Single Rooms
            </h3>
            <p className="text-gray-300">
              Our <span className="font-semibold">single accommodations</span>{" "}
              provide a private sanctuary for relaxation, complete with{" "}
              <span className="font-semibold">
                king-size beds, private outdoor bathtubs, and breathtaking
                jungle views
              </span>
              .
            </p>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>
                🏡 Grand Jungle Suite - $7,500{" "}
                {/* <span className="ml-2 px-1.5 py-0.5 text-xs font-medium text-yellow-300 border border-yellow-300 rounded">
                  Sold Out Second Cohort
                </span> */}
                {/* <span className="ml-2 px-1.5 py-0.5 text-xs font-medium text-red-500 border border-red-500 rounded">
                  Sold Out
                </span> */}
              </li>
              <li>
                🏡 Royal Suite - $6,000{" "}
                {/* <span className="ml-2 px-1.5 py-0.5 text-xs font-medium text-red-500 border border-red-500 rounded">
                  Sold Out
                </span> */}
              </li>
              <li>🏡 Gardenview Suite - $6,000</li>
              <li>
                🏡 Fishbowl Suite - $5,000
                {/* <span className="ml-2 px-1.5 py-0.5 text-xs font-medium text-yellow-300 border border-yellow-300 rounded">
                  Sold Out First Cohort
                </span> */}
              </li>
              <li>
                🏡 Bali Hai - $1,750
                {/* <span className="ml-2 px-1.5 py-0.5 text-xs font-medium text-red-500 border border-red-500 rounded">
                  Sold Out
                </span> */}
              </li>
            </ul>

            <HashLink
              smooth
              to="/rooms#single-rooms"
              scroll={scrollWithOffset}
              className="block mt-6 text-gray-100 hover:underline"
            >
              View Single Rooms →
            </HashLink>
          </div>

          {/* Double Rooms Overview */}
          <div className="border border-gray-700 rounded-lg p-6">
            <h3 className=" font-quattrocento text-2xl font-semibold mb-4">
              Double Rooms
            </h3>
            <p className="text-gray-300">
              Perfect for couples or friends, our{" "}
              <span className="font-semibold">double rooms</span> offer{" "}
              <span className="font-semibold">luxurious shared spaces</span>{" "}
              with{" "}
              <span className="font-semibold">
                twin or double beds, spa-like amenities, and scenic surroundings
              </span>
              .
            </p>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>
                🌿 River Suite - $3,000/person
                {/* <span className="ml-2 px-1.5 py-0.5 text-xs font-medium text-yellow-300 border border-yellow-300 rounded">
                  Selling Fast !
                </span> */}
              </li>
              <li>
                🌿 Skylight Suite - $2,500 / Person
                {/* <span className="ml-2 px-1.5 py-0.5 text-xs font-medium text-yellow-300 border border-yellow-300 rounded">
                  One spot Left
                </span> */}
              </li>
              <li>
                🌿 Poolview Suite - $2,500 / Person
                {/* <span className="ml-2 px-1.5 py-0.5 text-xs font-medium text-yellow-300 border border-yellow-300 rounded">
                  One spot Left
                </span> */}
              </li>

              <li>🌿 Bungalow Suite - $2,500 / Person</li>
              <li>
                🌿 Pool Mural Suite - $2,500 / Person
                {/* <span className="ml-2 px-1.5 py-0.5 text-xs font-medium text-red-500 border border-red-500 rounded">
                  Sold Out
                </span> */}
              </li>
            </ul>

            <HashLink
              smooth
              to="/rooms#double-rooms"
              scroll={scrollWithOffset}
              className="block mt-6 text-gray-100 hover:underline"
            >
              View Double Rooms →
            </HashLink>
          </div>
        </div>
      </div>
    </section>
  );
}
