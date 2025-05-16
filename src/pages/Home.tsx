// src/pages/Home.tsx
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Hosts from "../components/home/Hosts";
import Sanctuary from "../components/home/Sanctuary";
import RoomsOverview from "../components/home/RoomsOverview";
import FAQ from "../components/home/FAQ";
import CohortDates from "../components/home/CohortDates";

function Home() {
  return (
    <>
      <Hero />
      <CohortDates />
      <About />
      <Hosts />
      <Sanctuary />
      <RoomsOverview />
      <FAQ />
    </>
  );
}

export default Home;
