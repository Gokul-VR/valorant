import { useEffect, useState } from "react";
import { useLenis } from "./hooks/useLenis";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AgentsSection from "./components/AgentsSection";
import ValorantSection from "./components/ValorantSection";
import Footer from "./components/Footer";
import "./App.css";
import Agents from "./components/Agents";
import ContentSection from "./components/Content";
import Map from "./components/Map";
import News from "./components/News";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Lenis smooth scrolling
  useLenis();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5750);

    return () => clearTimeout(timer);
  }, []);

  // if (isLoading) {
  //   return <Preloader setIsLoading={setIsLoading} />;
  // }

  return (
    <>
      <Preloader setIsLoading={setIsLoading} />
      {!isLoading && (
        <>
          <Header />
          <main>
            <Hero />
            <News />
            <ContentSection />
            <Agents />
            {/* <AgentsSection /> */}
            <Map />
            <ValorantSection />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
