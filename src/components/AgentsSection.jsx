import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./AgentSection.css";
// Import agent images
import jett from "../assets/images/jett.png";
import raze from "../assets/images/raze.png";
import omen from "../assets/images/omen.png";
import breach from "../assets/images/breach.png";
import sky from "../assets/images/sky.png";
import yoru from "../assets/images/yoru.png";
import neon from "../assets/images/neon.png";
import iso from "../assets/images/iso.png";
import chamber from "../assets/images/chamber.png";
import gekko from "../assets/images/gekko.png";
import harbor from "../assets/images/harbor.png";
import viper from "../assets/images/viper.png";
import reyna from "../assets/images/reyna.png";
import sova from "../assets/images/sova.png";
import kayo from "../assets/images/kayo.png";
import fade from "../assets/images/fade.png";

// Import role icons
import duelistIcon from "../assets/images/duelist_icon.png";
import controllerIcon from "../assets/images/controller_icon.png";
import initiatorIcon from "../assets/images/initiator_icon.png";
import sentinelIcon from "../assets/images/sentinel_icon.png";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const agentsData = [
  { name: "Jett", image: jett, role: "DUELIST", roleIcon: duelistIcon },
  { name: "Raze", image: raze, role: "DUELIST", roleIcon: duelistIcon },
  { name: "Omen", image: omen, role: "CONTROLLER", roleIcon: controllerIcon },
  { name: "Breach", image: breach, role: "INITIATOR", roleIcon: initiatorIcon },
  { name: "Sky", image: sky, role: "INITIATOR", roleIcon: initiatorIcon },
  { name: "Yoru", image: yoru, role: "DUELIST", roleIcon: duelistIcon },
  { name: "Neon", image: neon, role: "DUELIST", roleIcon: duelistIcon },
  // { name: "ISO", image: iso, role: "DUELIST", roleIcon: duelistIcon },
  { name: "Chamber", image: chamber, role: "SENTINEL", roleIcon: sentinelIcon },
  { name: "Gekko", image: gekko, role: "INITIATOR", roleIcon: initiatorIcon },
  {
    name: "Harbor",
    image: harbor,
    role: "CONTROLLER",
    roleIcon: controllerIcon,
  },
  { name: "Viper", image: viper, role: "CONTROLLER", roleIcon: controllerIcon },
  { name: "Reyna", image: reyna, role: "DUELIST", roleIcon: duelistIcon },
  { name: "Sova", image: sova, role: "INITIATOR", roleIcon: initiatorIcon },
  { name: "Kayo", image: kayo, role: "INITIATOR", roleIcon: initiatorIcon },
  { name: "Fade", image: fade, role: "INITIATOR", roleIcon: initiatorIcon },
];

const AgentCard = ({ agent }) => {
  return (
    <div className="agent-card">
      <div className="agent-card-bg"></div>
      <div className="agent-portrait">
        <img src={agent.image} alt={agent.name} />
      </div>
      <div className="agent-info">
        <h3 className="agent-name">{agent.name}</h3>
        <div className="agent-role">
          <img src={agent.roleIcon} alt={`${agent.role} Role`} width="5%" height="5%"/>
          <span>{agent.role}</span>
        </div>
      </div>
    </div>
  );
};

const AgentsSection = () => {
  const sectionTitleRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    // Wait for next tick to ensure DOM is ready
    const timer = setTimeout(() => {
      // Agents Section Title animation
      gsap.fromTo(
        sectionTitleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          scrollTrigger: {
            trigger: ".agents-section",
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
          opacity: 1,
          y: 0,
        }
      );

      // Agent Cards Stagger animation
      gsap.from(".swiper-slide .agent-card", {
        scrollTrigger: {
          trigger: ".agents-swiper",
          start: "top 80%",
        },
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="agents-section">
      <div className="container">
        <h2 className="section-title" ref={sectionTitleRef}>
          AGENTS
        </h2>

        <Swiper
          ref={swiperRef}
          className="agents-swiper"
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {agentsData.map((agent, index) => (
            <SwiperSlide key={index}>
              <AgentCard agent={agent} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AgentsSection;
