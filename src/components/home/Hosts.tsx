// src/components/Hosts.tsx
import HostSubhi from "./HostSubhi";
import HostJamie from "./HostJamie";
import HostAlana from "./HostAlana";

export default function Hosts() {
  return (
    <section className="md:mt-24 border-t border-gray-500 bg-gray-950 text-white">
      <div className="p-8 max-w-7xl mx-auto mt-12">
        <h2 className="font-cinzel text-4xl font-bold mb-8">Our Hosts</h2>
        <HostSubhi />
        <HostJamie />
        <HostAlana />
      </div>
    </section>
  );
}
