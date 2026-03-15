import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectSliderProps } from "../sliderProps";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
import { AI_ATTENDANCE_SYSTEM, BENESYS, BTF, EBT, GOLD_STAR_PRODUCTS, GS_MOB, GS_WEB, HUNTER_FINANCE } from "../constants/project";
import useScrollReveal from "../useScrollReveal";


const projects = [
  { data: GS_WEB, category: "Web App", title: "Growthscape", img: "img/service/growthscape.png" },
  { data: GS_MOB, category: "Mobile App", title: "Growthscape", img: "img/service/growthscape.png" },
  { data: HUNTER_FINANCE, category: "Web App", title: "Hunter Finance", img: "img/service/HF_logo.png" },
  { data: GOLD_STAR_PRODUCTS, category: "Web App", title: "Gold Star Products", img: "img/service/GSP.jpg" },
  // { data: AI_ATTENDANCE_SYSTEM, category: "Product", title: "AI Attendance System", img: "img/service/logo.svg" },
  { data: EBT, category: "Product", title: "Epic Bug Tracker", img: "img/service/EBT.svg" },
  // { data: BENESYS, category: "Web App", title: "Benesys", img: "img/service/benesys_logo.png" },
  // { data: BTF, category: "Web App", title: "Black Tulip Flowers", img: "img/service/BTF_logo.webp" },
];

const Projects = () => {
  useEffect(() => {
    dataImage();
  }, []);
  const [detailsPopup, setDetailsPopup] = useState(false);
  const [data, setData] = useState({});
  const revealRef = useScrollReveal();

  return (
    <Fragment>
      <DetailsPopup data={data} close={() => setDetailsPopup(false)} open={detailsPopup} />
      <div className="orido_tm_section" id="portfolio" ref={revealRef}>
        <div className="orido_tm_portfolio">
          <div className="container">
            <div className="orido_tm_main_title" data-reveal="up">
              <h3>
                <span>Recent Projects</span>
              </h3>
            </div>
            <div className="portfolio_list" data-reveal="up" data-reveal-delay="1">
              <Swiper
                {...projectSliderProps}
                className="owl-carousel gallery_zoom"
              >
                {projects.map((project, i) => (
                  <SwiperSlide key={i}>
                    <div className="list_inner">
                      <div className="project_image">
                        <img src={project.img} alt={project.title} />
                      </div>
                      <div className="details">
                        <span className="category">{project.category}</span>
                        <h3 className="title">{project.title}</h3>
                      </div>
                      <a
                        className="orido_tm_full_link c-pointer"
                        onClick={() => {
                          setData(project.data);
                          setDetailsPopup(true);
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <a className="prev_button" href="#">
                <img className="svg" src="img/svg/prev.svg" alt="" />
              </a>
              <a className="next_button" href="#">
                <img className="svg" src="img/svg/next.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Projects;
