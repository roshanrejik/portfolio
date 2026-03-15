import { Fragment, useEffect, useState } from "react";
import { filter_hashtag } from "../utilits";
import Counter from "./Counter";
import useScrollReveal from "../useScrollReveal";

const counts = [
  {
    name: "Frameworks",
    value: 6,
    suffix: "+",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
    ),
  },
  {
    name: "Packages Used",
    value: 40,
    suffix: "+",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
    ),
  },
  {
    name: "Corporate Projects",
    value: 7,
    suffix: "",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
    ),
  },
  {
    name: "Own Projects",
    value: 4,
    suffix: "",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
    ),
  },
];

const skills = [
  { name: "React Native", value: "", icon: "img/svg/reactnative.svg" },
  { name: "Next JS", value: "", icon: "img/svg/nextjs.svg" },
  { name: "React JS", value: "", icon: "img/svg/reactjs.svg" },
  { name: "Node JS", value: "", icon: "img/svg/nodejs.svg" },
  { name: "TypeScript", value: "", icon: "img/svg/typescript.png" },
  { name: "Express JS", value: "", icon: "img/svg/express.svg" },
  { name: "Mongo DB", value: "", icon: "img/svg/mongodb.png" },
  { name: "Firebase", value: "", icon: "img/svg/firebase.png" },
  { name: "AWS", value: "", icon: "img/svg/aws.png" },
  { name: "Docker", value: "", icon: "img/svg/docker.png" },
];

const experiences = [
  {
    company: "Apps Team Technologies Pvt. Ltd.",
    designation: "Sr. Software Developer",
    time: "Nov 2023 – Present",
  },
  {
    company: "CoStrategix",
    designation: "Associate Software Engineer",
    time: "May 2022 – Nov 2023",
  },
  {
    company: "Freelancer.com",
    designation: "Software Developer (MERN)",
    time: "Nov 2021 – May 2022",
  }
];

const educations = [
  {
    institution: "PES University / Kuvempu University",
    certificate: "Bachelor of Computer Application (BCA)",
    time: "2018 - 2021",
  },
  {
    institution: "Acharya Institute of Management and Science",
    certificate: "PCMCs, Engineering Science",
    time: "2016 - 2018",
  }
];

const ExpertAreas = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeContentTab = (value) => (activeTab == value ? "current" : "");
  const expertRef = useScrollReveal();
  const counterRef = useScrollReveal();

  useEffect(() => {
    filter_hashtag();
  }, [activeTab]);

  return (
    <Fragment>
      <div className="orido_tm_section" ref={expertRef}>
        <div className="orido_tm_informations">
          <div className="container">
            <div className="informations_inner">
              <div className="left">
                <div className="orido_tm_main_title" data-reveal="left">
                  <h3>
                    <span>
                      My expert
                      <br />
                      areas
                    </span>
                  </h3>
                </div>
                <div className="text" data-reveal="left" data-reveal-delay="1">
                  <p>
                    With a deep understanding of React.js, I specialize in crafting dynamic and interactive user interfaces. Proficient in leveraging Reacts component-based architecture and state management for seamless front-end development.
                  </p>
                  <p>
                    As a Next.js enthusiast, I harness the power of server-side rendering and static site generation to create blazing-fast, SEO-friendly web applications. Skilled in optimizing performance and building scalable projects using Next.js.
                  </p>
                  <p>I excel in developing cross-platform mobile applications using React Native, ensuring a native-like experience across iOS and Android platforms. Well-versed in creating efficient, visually appealing mobile solutions.</p>
                  <p>With Node.js, I wield the ability to build robust, scalable back-end solutions. Leveraging its asynchronous nature, I design and implement APIs, handle data, and ensure seamless communication between the front and back end.</p>
                </div>
                {/* <div className="orido_tm_boxed_button">
                  <a href="#">
                    My Resume{" "}
                    <img className="svg" src="img/svg/paper.svg" alt="" />
                  </a>
                </div> */}
              </div>
              <div className="right" data-reveal="right" data-reveal-delay="2">
                <div className="filter">
                  <ul>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(1)}`}
                        onClick={() => setActiveTab(1)}
                        data-tab="tab_1"
                      >
                        <span>Skills</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(2)}`}
                        onClick={() => setActiveTab(2)}
                        data-tab="tab_2"
                      >
                        <span>Experience</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(3)}`}
                        onClick={() => setActiveTab(3)}
                        data-tab="tab_3"
                      >
                        <span>Education</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                  <span className="ccc" />
                </div>
                <div className="content">
                  <div id="tab_1" className={`wrapper ${activeContentTab(1)}`}>
                    <div className="skillbox">
                      <ul>
                        {skills.map((skill, i) => (
                          <li key={i} className="skill_animate" style={{ animationDelay: `${i * 0.06}s` }}>
                            <div className="list_inner">
                              <span className="icon">
                                <span className="in">
                                  <img
                                    // className="svg"
                                    src={skill.icon}
                                    alt=""
                                  />
                                </span>
                              </span>
                              <p className="name">
                                {skill.name}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_2" className={`wrapper ${activeContentTab(2)}`}>
                    <div className="timelinebox">
                      <ul>
                        {experiences.map((experience, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{experience.time}</span>
                                <span className="company">
                                  {experience.company}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{experience.designation}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_3" className={`wrapper ${activeContentTab(3)}`}>
                    <div className="timelinebox">
                      <ul>
                        {educations.map((education, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{education.time}</span>
                                <span className="company">
                                  {education.institution}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{education.certificate}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /INFORMATIONS */}
      {/* COUNTER */}
      <div className="orido_tm_section" ref={counterRef}>
        <div className="orido_tm_counter">
          <div className="container">
            <div className="counter_list">
              <ul>
                {counts.map((count, i) => (
                  <li key={i} data-reveal="up" data-reveal-delay={`${i + 1}`}>
                    <div className="list_inner">
                      <div className="counter_icon">{count.icon}</div>
                      <h3>
                        <Counter end={count.value} />
                        {count.suffix && <span className="counter_suffix">{count.suffix}</span>}
                      </h3>
                      <span className="title">{count.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ExpertAreas;
